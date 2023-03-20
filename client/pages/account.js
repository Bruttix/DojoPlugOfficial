import React, { useState, useEffect, useContext } from "react";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";
import { UserContext } from "../context";
import moment from "moment";

const Account = () => {
  const [state, setState] = useContext(UserContext);
  const [subscriptions, setSubscriptions] = useState([]);

  /*useEffect(() => {
    const getRoles = async () => {
      const { data } = await axios.get("/roles");
      console.log("roles => ", data);
      setRoles(data.data);
    };

     if (state && state.token)getRoles();
  }, [state,roles ]);*/

  const manageSubscriptions = async () => {
    const { data } = await axios.get("/api/customer-portal");
    window.open(data);
  };

  return (
    <div className="container">
      <div className="row">
        <UserOutlined className="display-4" />
        <h1>Account</h1>
        <p className="lead pb-4">Subscription status</p>
        {/* <pre>{JSON.stringify(roles, null, 4)}</pre> */}
      </div>

      <div className="row">
      {/*  {roles &&
          roles.map((sub) => (*/}
            <div >
              <section>
                <hr />
                {/*<h4 className="fw-bold">{sub.plan.nickname}</h4>
                <h5>
                  {(sub.plan.amount / 100).toLocaleString("en-US", {
                    style: "currency",
                    currency: sub.plan.currency,
                  })}
                </h5>
                <p>Status: {sub.status}</p>
                <p>
                  Card last 4 digit: {sub.default_payment_method.card.last4}
                </p>
                <p>
                  Current period end:{" "}
                  {moment(sub.current_period_end * 1000)
                    .format("dddd, MMMM Do YYYY h:mm:ss a")
                    .toString()}
                </p>
                <button
                  onClick={() =>
                    history.push(`/${sub.plan.nickname.toLowerCase()}`)
                  }
                  className="btn btn-outline-danger"
                >
                  Access
                </button>{" "}
*/}
                <button
                  onClick={manageSubscriptions}
                  className="btn btn-outline-warning"
                >
                  Manage Subscription
                </button>
              </section> 
            </div> 
          {/*))}*/}
      </div>
          <p className="lead pb-4">Role Lower</p>
    </div>
  );
};

export default Account;
