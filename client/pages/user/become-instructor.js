import { useContext, useState } from "react";
import { Context } from "../../context";
import { Button } from "antd";
import axios from "axios";
import {
  SettingOutlined,
  UserSwitchOutlined,
  LoadingOutlined, SketchOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import UserRoute from "../../components/routes/UserRoute";

const BecomeInstructor = () => {
  // state
  const [loading, setLoading] = useState(false);
  const {
    state: { user },
  } = useContext(Context);

  const becomeInstructor = () => {
    // console.log("become instructor");
    setLoading(true);
    axios
      .post("/api/make-instructor")
      .then((res) => {
        console.log(res);
        window.location.href = res.data;
      })
      .catch((err) => {
        console.log(err.response.status);
        toast("Stripe onboarding failed. Try again.");
        setLoading(false);
      });
  };

  return (
    <>
     <h2 className="subscribeContain"><img className="becomeInstructorBG"></img>
      <h1 className="jumbotron loginBanner text-center square">Become an Instructor</h1>

      <div className="container ">
        <div className="row ">
          <div className="col-md-6 offset-md-3 text-center topNav">
            <div className="pt-4">
              <UserSwitchOutlined className="display-1 pb-3" />
              <br />
              <h2 className="instructTitle">Setup your payout<br></br>to publish courses on<br></br> DOJO PLUG<br></br><SketchOutlined /></h2>
              <p className="lead ">
                Partnered with STRIPE for secured transactions
              </p>

              <Button
                className="mb-3 instructPayoutSetup"
                type="primary"
                block
                shape="round"
                icon={loading ? <LoadingOutlined /> : <SettingOutlined />}
                size="large"
                onClick={becomeInstructor}
                disabled={
                  (user && user.role && user.role.includes("Instructor")) ||
                  loading
                }
              >
                {loading ? "Processing..." : "Payout Setup"}
              </Button>

              <p className="lead">
                You will be redirected to Stripe<br></br> to complete onboarding process.
              </p>
            </div>
          </div>
        </div>
         </div>
      </h2 >
    </>
  );
};

export default BecomeInstructor;
