import { useContext, useEffect } from "react";
import { Context } from "../../context";
import { SyncOutlined } from "@ant-design/icons";
import axios from "axios";

const StripeCallback = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(Context);

  useEffect(() => {
      
    if (user) {
      axios.post("/api/get-account-diamond").then((res) => {
         console.log("result after axios.post /api/get-account-diamond , ", res);
        dispatch({
          type: "LOGIN",
          payload: res.data,
        });
        window.localStorage.setItem("user", JSON.stringify(res.data));
        window.location.href = "/user/course/diamond";
      });
    }
  }, [user]);

  return (
      <>
    <SyncOutlined
      spin
      className="d-flex justify-content-center display-1 text-danger p-5"
          />
          <div style={{ textAlign: "center" }}>Success! You've been upgraded to Diamond!</div>
      </>
  );
};

export default StripeCallback;
