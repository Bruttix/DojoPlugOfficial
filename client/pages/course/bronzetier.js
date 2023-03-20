import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Context } from "../../context";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "antd";
import {  PlayCircleOutlined } from "@ant-design/icons";

const SingleCourse = ({ }) => {
  // state
  const [loading, setLoading] = useState(false);
  // context

  const {
    state: { user },
  } = useContext(Context);

  useEffect(() => {
    if (user );
  }, [user]);

 /* const checkEnrollment = async () => {
    const { data } = await axios.get(`/api/check-enrollment/${course._id}`);
    console.log("CHECK ENROLLMENT", data);
    setEnrolled(data);
  };*/

  const router = useRouter();
  const { slug } = router.query;

  const handlePaidBronzeEnrollment = async () => {
    // console.log("handle paid enrollment");
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/paid-bronze/`);
      console.log(data );
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
      stripe.redirectToCheckout({ sessionId: data });
    } catch (err) {
      toast("Bronze Enrollment failed, try again.");
      console.log(err);
      setLoading(false);
    }
  };


  return (
    <>
      {/* <pre>{JSON.stringify( null, 4)}</pre> */}
          <div>look
              <Button
                  className="mb-3 mt-3 loginButton logBut"

                  block
                  shape="round"
                  icon={<PlayCircleOutlined />}
                  size="large"
                  disabled={
                      (!user) ||
                      loading}
                  onClick={handlePaidBronzeEnrollment}
              >
                  BecomeBronze!
              </Button>
              <br></br>
    </>
  );
};


export default SingleCourse;
