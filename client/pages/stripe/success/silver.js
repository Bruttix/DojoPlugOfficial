import { useEffect } from "react";
import { CheckOutlined } from "@ant-design/icons";
import UserRoute from "../../../components/routes/UserRoute";
import { useRouter } from "next/router";
import axios from "axios";

const StripeSilverSuccess = () => {
  // router
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) successSilverRequest();
  }, [id]);

  console.log(id);

  const successSilverRequest = async () => {
    const { data } = await axios.get(`/api/stripe-success/silver`);
    console.log("SUCCESS REQ DATA", data);
      router.push(`/make-silver`);
  };

  return (
    <UserRoute showNav={false}>
      <div className="row text-center">
        <div className="col-md-9 pb-5">
          <div className="d-flex justify-content-center p-5">
            <CheckOutlined  className="display-1 text-danger p-5" />
            <button onClick={successSilverRequest}></button>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </UserRoute>
  );
};

export default StripeSilverSuccess;
