import { useState, useEffect, useContext } from "react";
import { Context } from "../../context";
import InstructorRoute from "../../components/routes/InstructorRoute";
import axios from "axios";
import {
  DollarOutlined,
  SettingOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { stripeCurrencyFormatter } from "../../utils/helpers";

const InstructorRevenue = () => {
  const [balance, setBalance] = useState({ pending: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    sendBalanceRequest();
  }, []);

  const sendBalanceRequest = async () => {
    const { data } = await axios.get("/api/instructor/balance");
    setBalance(data);
  };

  const handlePayoutSettings = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/instructor/payout-settings");
      window.location.href = data;
    } catch (err) {
      setLoading(false);
      console.log(err);
      alert("Unable to access payout settings. Try later.");
    }
  };

  return (
    <InstructorRoute>
      <h2 className="subscribeContain" >
       <img className="revenueDashBG"></img>
         <div className="subscribeBigBox">
          <div className="container">
            <div className="row pt-2">
              <div className="col-md-8 offset-md-2 revenueBG p-5">
                <h2 className="revenueSubTitle">
                  Revenue report <DollarOutlined className="float-right" />{" "}
                </h2>
                <small>
                  You get paid directly from Stripe<br></br> to your bank account every 48
                  hours
                </small>
                <hr />
                {/* {JSON.stringify(balance, null, 4)} */}
                <h4 className="revenueSubTitle">
                  Pending balance
                  {balance.pending &&
                    balance.pending.map((bp, i) => (
                      <span key={i} className="float-right">
                        {stripeCurrencyFormatter(bp)}
                      </span>
                    ))}
                </h4>
                <small>For the last 48 hours</small>
                <hr />
                <h4 className="revenueSubTitle">
                  Payouts{" "}
                  {!loading ? (
                    <SettingOutlined
                      className="float-right pointer"
                      onClick={handlePayoutSettings}
                    />
                  ) : (
                    <SyncOutlined spin className="float-right pointer" />
                  )}
                </h4>
                <small>
                  Update your Stripe account details or view previous payouts.
                </small>
              </div>
            </div>
          </div>
         </div>
       </h2 >
    </InstructorRoute>
  );
};

export default InstructorRevenue;