import { useEffect } from "react";
import { CheckOutlined } from "@ant-design/icons";
import UserRoute from "../../../components/routes/UserRoute";
import { useRouter } from "next/router";
import axios from "axios";

const StripeBronzeSuccess = () => {
  // router
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) successBronzeRequest();
  }, [id]);

  console.log(id);

  const successBronzeRequest = async () => {
    const { data } = await axios.get(`/api/stripe-success/bronze`);
    console.log("SUCCESS REQ DATA", data);
      router.push(`/make-bronze`);
  };

  return (
    <UserRoute showNav={false}>
      <div className="row text-center">
        <div className="col-md-9 pb-5">
          <div className="d-flex justify-content-center p-5">
            <CheckOutlined  className="display-1 text-danger p-5" />
            <button onClick={successBronzeRequest}></button>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </UserRoute>
  );
};

export default StripeBronzeSuccess;
