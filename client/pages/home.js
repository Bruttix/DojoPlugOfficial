import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context";

const Home = ({ history }) => {
    const [state, setState] = useContext(UserContext);
  const [prices, setPrices] = useState([]);
  const [userSubscriptions, setUserSubscriptions] = useState([]);

  useEffect(() => {
    let result = [];
    const check = () =>
      state &&
      state.user &&
      state.user.subscriptions &&
      state.user.subscriptions.map((sub) => {
        result.push(sub.plan.id);
      });
    check();
    setUserSubscriptions(result);
  }, [state && state.user]);

  useEffect(() => {
    const isPaused = () => {
      state &&
        state.user &&
        state.user.subscriptions &&
        state.user.subscriptions.resumes_at &&
        history.push("/account");
    };

    state && state.user && isPaused();
  }, [state && state.user]);


    const dynamicDescription = () => {
        if (price.nickname === "BASIC") {
            return "5 exclusice stocks";
        } else if (price.nickname === "STANDARD") {
            return "10 exclusice stocks";
        } else if (price.nickname === "PREMIUM") {
            return "20 exclusice stocks";
        }
    };

    const buttonStyle = () => {
        return price.nickname === "BASIC" ? "btn-outline-danger" : "btn-danger";
    };

    const headerStyle = () => {
        return price.nickname === "PREMIUM" ? "bg-danger text-light" : "";
    };

    const borderStyle = () => {
        return price.nickname === "PREMIUM" ? "border-danger" : "";
    };

    const buttonText = () => {
        return state && state.token ? "Buy the plan" : "Sign up";
    };

  const handleClick = async (e, price) => {
    e.preventDefault();
    if (userSubscriptions && userSubscriptions.includes(price.id)) {
      history.push(`/${price.nickname.toLowerCase()}`);
      return;
    }
    // console.log("plan clicked", price.id);
    if (state && state.token) {
      const { data } = await axios.post("/create-subscription", {
        priceId: price.id,
      });
      window.open(data);
    } else {
      history.push("/register");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row col-md-6 offset-md-3 text-center">
        <h1 className="pt-5 fw-bold">
          Explore the right plan for your business
        </h1>
        <p className="lead pb-4">Choose a plan that suites you best!</p>
      </div>

      <div className="row pt-5 mb-3 text-center">
        {prices &&
          prices.map((price) => (
            <div className="col">
            <div className={`card mb-4 rounded-3 shadow-sm ${borderStyle()}`}>
                <div className={`card-header py-3 ${headerStyle()}`}>
                    <h4 className="my-0 fw-normal">{price.nickname}</h4>
                </div>

                <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                        {(price.unit_amount / 100).toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })}{" "}
                        <small className="text-muted fw-light">/mo</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li className="fw-bold">{dynamicDescription()}</li>
                        <li>Free market analysis</li>
                        <li>Email support</li>
                        <li>Help center access</li>
                    </ul>

                    {/* <pre>{JSON.stringify(price, null, 4)}</pre> */}

                    {/* <Link to="/register"> */}
                    <button
                        onClick={(e) => handleSubscription(e, price)}
                        className={`w-100 btn btn-lg ${buttonStyle()}`}
                    >
                        {userSubscriptions && userSubscriptions.includes(price.id)
                            ? "Access plan"
                            : buttonText()}
                    </button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
