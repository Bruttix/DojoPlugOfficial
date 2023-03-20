import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";
import UserRoute from "../components/routes/UserRoute";
import {
  SettingOutlined,LoadingOutlined,TagOutlined, PlayCircleOutlined , SketchCircleFilled 
} from "@ant-design/icons";

import { Button } from "antd";

import { loadStripe } from "@stripe/stripe-js";

const Subscribe = () => {
  // state
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // context
  const {
    state: { user },
  } = useContext(Context);
  // router
  const router = useRouter();

  // redirect if user is logged in
  

  {user && user.role && user.role.includes("Subscriber") ? (
        useEffect(() => {
            if (user !== null) router.push("/subscribe");
        }, [user])
      ) : (
        useEffect(() => {
            if (user !== null) router.push("/");
        }, [user])
   )}
  // new implementation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/api/forgot-password", { email });
      setSuccess(true);
      toast("Check your email for the secret code");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    // console.log(email, code, newPassword);
    // return;
    try {
      setLoading(true);
      const { data } = await axios.post("/api/reset-password", {
        email,
        code,
        newPassword,
      });
      setEmail("");
      setCode("");
      setNewPassword("");
      setLoading(false);
      toast("Great! Now you can login with your new password");
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }
  };

  /*hierarchy payment setup*/
   // bronze
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
  // silver
  const handlePaidSilverEnrollment = async () => {
    // console.log("handle paid enrollment");
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/paid-silver/`);
      console.log(data );
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
      stripe.redirectToCheckout({ sessionId: data });
    } catch (err) {
      toast("Silver Enrollment failed, try again.");
      console.log(err);
      setLoading(false);
    }
    };
  // gold
  const handlePaidGoldEnrollment = async () => {
    // console.log("handle paid enrollment");
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/paid-gold/`);
      console.log(data );
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
      stripe.redirectToCheckout({ sessionId: data });
    } catch (err) {
      toast("Gold Enrollment failed, try again.");
      console.log(err);
      setLoading(false);
    }
  };
  // platinum
  const handlePaidPlatinumEnrollment = async () => {
    // console.log("handle paid enrollment");
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/paid-platinum/`);
      console.log(data );
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
      stripe.redirectToCheckout({ sessionId: data });
    } catch (err) {
      toast("Platinum Enrollment failed, try again.");
      console.log(err);
      setLoading(false);
    }
    };
  // diamond
  const handlePaidDiamondEnrollment = async () => {
    // console.log("handle paid enrollment");
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/paid-diamond/`);
      console.log(data );
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
      stripe.redirectToCheckout({ sessionId: data });
    } catch (err) {
      toast("Diamond Enrollment failed, try again.");
      console.log(err);
      setLoading(false);
    }
  };
  // stargem
  const handlePaidStargemEnrollment = async () => {
    // console.log("handle paid enrollment");
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/paid-stargem/`);
      console.log(data );
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
      stripe.redirectToCheckout({ sessionId: data });
    } catch (err) {
      toast("Stargem Enrollment failed, try again.");
      console.log(err);
      setLoading(false);
    }
  };

  /*hierarchy payment end*/
  return (
    <UserRoute><h2 className="subscribeContain" ><img className="subscribeBG"></img>
      <div className="subscribeBigBox">
      <h1 className="jumbotron loginBanner text-center bg-primary square">
              SUBSCRIBE
      </h1>
      <div className="subscribeUpper">
            <div className="subscribeInfo">
                  <strong>Show</strong> your <strong>Love</strong> and get <strong>Rewarded</strong>! 
            </div>
            <div className="whySubscribe">
                  We highly <strong>appreciate</strong> our <strong>donators</strong> and have increasing <strong>exclusive rewards</strong>
                  for higher tiers of <strong>patronage</strong><br></br> <strong>Donations</strong> raised directly <strong>supports</strong> us
                  in the <strong>continued </strong>content<strong> creation</strong> for you and everyone!
            </div>
      </div>
         <div className="subscribeContainer">
              <div className="membershipLevelsTitle">MEMBERSHIP LEVELS</div>
             
             <div className="classes">
               <div href="/" className="classBronze">
                 <div className="headerContainer"><div className="classHeader"></div></div>
                 <p className="classTitle">Bronze</p>
                 <p className="classSubTitle">( Tier 1 )</p>
                      <Button
                          className="mb-3 mt-3 bronzeButton logBut"

                          block
                          shape="round"
                          icon={<SketchCircleFilled />}
                          size="large"
                          disabled={(user && user.role && user.role.includes("Bronze")) ||
                              loading}
                          onClick={handlePaidBronzeEnrollment}
                      >
                          Buy BRONZE
                      </Button>
                 <div className="classImgBronze"></div>
                 <footer><div className="classFooter"></div></footer>  
                 <div className="wrap-collabsible">
                         <input id="collapsible" className="toggle" type="checkbox" />
                         <label htmlFor="collapsible" className="moreInfoBtn lbl-toggle"><TagOutlined className="tagIconColor"/><br></br>More Info <br></br> 5$ </label>
                         <div className="collapsible-content">
                             <div className="content-inner">
                                 <p>Bronze Perks
                                     <li className="perks">Exclusive Free Lessons Access </li>
                                     <li className="perks">Access All Subscriber posts</li>
                                     <li className="perks">Access Available Instructors Lessons</li>
                                     <li className="perks">Access Exclusive News Feed</li>
                                 </p>
                                 <p>Bronze Rewards
                                     <li className="perks">One ticket entry for Elite monthly drop</li>
                                     <li className="perks">One ticket entry for Bronze raffle monthly drop</li>
                                 </p>
                             </div>
                         </div>
                 </div>
               </div>
               
               <div href="/" className="classSilver">
                 <div className="headerContainer"><div className="classHeader"></div></div>
                 <p className="classTitle">Silver</p>
                 <p className="classSubTitle">( Tier 2 )</p>
                 <Button
                     className="mb-3 mt-3 silverButton logBut"
                 
                     block
                     shape="round"
                     icon={<SketchCircleFilled />}
                     size="large"
                     disabled={(user && user.role && user.role.includes("Silver")) ||
                              loading}
                     onClick={handlePaidSilverEnrollment}
                 >
                     Buy SILVER
                 </Button>
                 <div className="classImgSilver"></div>
                 <footer><div className="classFooter"></div></footer>
                 <div className="wrap-collabsible">
                         <input id="collapsible1" className="toggle" type="checkbox" />
                         <label htmlFor="collapsible1" className="moreInfoBtn lbl-toggle"><TagOutlined className="tagIconColor"/><br></br>More Info <br></br> 10$</label>
                         <div className="collapsible-content">
                             <div className="content-inner">
                                 <p>Silver Perks
                                     <li className="perks">Exclusive training routine insights.</li>
                                     <li className="perks">Access to Exclusive Blog posts</li>
                                     <li className="perks">Exclusive Free Lessons Access </li>
                                     <li className="perks">Access All Subscriber posts</li>
                                     <li className="perks">Access Available Instructors Lessons</li>
                                     <li className="perks">Access Exclusive News Feed</li>
                                 </p>
                                 <p>Silver Rewards
                                     <li className="perks">Two ticket entries for Elite monthly drop</li>
                                     <li className="perks">One ticket entry for Silver raffle monthly drop</li>
                                 </p>
                             </div>
                         </div>
                 </div>
               </div>
               <div href="/" className="classGold">
                 <div className="headerContainer"><div className="classHeader"></div></div>
                 <p className="classTitle">Gold</p>
                 <p className="classSubTitle">( Tier 3 )</p>
                 <Button
                    className="mb-3 mt-3 goldButton logBut"
                    block
                    shape="round"
                    icon={<SketchCircleFilled />}
                    size="large"
                    disabled={(user && user.role && user.role.includes("Gold")) ||
                              loading}
                    onClick={handlePaidGoldEnrollment}
                 >
                    Buy GOLD
                 </Button>
                 <div className="classImgGold"></div>
                 <footer><div className="classFooter"></div></footer>
                 <div className="wrap-collabsible">
                         <input id="collapsible2" className="toggle" type="checkbox" />
                         <label htmlFor="collapsible2" className="moreInfoBtn lbl-toggle"><TagOutlined className="tagIconColor"/><br></br>More Info <br></br> 20$</label>
                         <div className="collapsible-content">
                             <div className="content-inner">
                                 <p>Gold Perks
                                     <li className="perks">Able to become a Instructor to sell courses.</li>
                                     <li className="perks">Exclusive training routine insights.</li>
                                     <li className="perks">Access to Exclusive Blog posts</li>
                                     <li className="perks">Exclusive Free Lessons Access </li>
                                     <li className="perks">Access All Subscriber posts</li>
                                     <li className="perks">Access Available Instructors Lessons</li>
                                     <li className="perks">Access Exclusive News Feed</li>
                                 </p>
                                 <p>Gold Rewards
                                     <li className="perks">Three ticket entries for Elite monthly drop.</li>
                                     <li className="perks">One ticket entry for Gold raffle monthly drop.</li>
                                 </p>
                             </div>
                         </div>
                 </div>
               </div>
               <div href="/" className="classPlatinum">
                 <div className="headerContainer"><div className="classHeader"></div></div>
                 <p className="classTitle">Platinum</p>
                 <p className="classSubTitle">( Tier 4 )</p>
                 <Button
                    className="mb-3 mt-3 platinumButton logBut"
                    block
                    shape="round"
                    icon={<SketchCircleFilled />}
                    size="large"
                    disabled={(user && user.role && user.role.includes("Platinum")) ||
                              loading}
                    onClick={handlePaidPlatinumEnrollment}
                 >
                    Buy PLATINUM
                 </Button>
                 <div className="classImgPlatinum"></div>
                 <footer><div className="classFooter"></div></footer>
                 <div className="wrap-collabsible">
                         <input id="collapsible3" className="toggle" type="checkbox" />
                         <label htmlFor="collapsible3" className="moreInfoBtn lbl-toggle"><TagOutlined className="tagIconColor"/><br></br>More Info <br></br> 50$</label>
                         <div className="collapsible-content">
                             <div className="content-inner">
                                 <p>Platinum Perks
                                     <li className="perks">Exclusive One on One video call with the Dojo Sensei</li>
                                     <li className="perks">Able to become a Instructor to sell courses.</li>
                                     <li className="perks">Exclusive training routine insights.</li>
                                     <li className="perks">Access to Exclusive Blog posts</li>
                                     <li className="perks">Exclusive Free Lessons Access </li>
                                     <li className="perks">Access All Subscriber posts</li>
                                     <li className="perks">Access Available Instructors Lessons</li>
                                     <li className="perks">Access Exclusive News Feed</li>
                                 </p>
                                 <p>Platinum Rewards
                                     <li className="perks">Receive a personalized Mug</li>
                                     <li className="perks">Four ticket entries for Elite monthly drop</li>
                                     <li className="perks">One ticket entry for Platinum raffle monthly drop</li>
                                 </p>
                             </div>
                         </div>
                 </div>
               </div>
               <div href="/" className="classDiamond">
                 <div className="headerContainer"><div className="classHeader"></div></div>
                 <p className="classTitle">Diamond</p>
                 <p className="classSubTitle">( Tier 5 )</p>
                 <Button
                    className="mb-3 mt-3 diamondButton logBut"
                    block
                    shape="round"
                    icon={<SketchCircleFilled />}
                    size="large"
                    disabled={(user && user.role && user.role.includes("Diamond")) ||
                              loading}
                    onClick={handlePaidDiamondEnrollment}
                 >
                    Buy DIAMOND
                 </Button>
                 <div className="classImgDiamond"></div>
                 <footer><div className="classFooter"></div></footer>
                 <div className="wrap-collabsible">
                         <input id="collapsible4" className="toggle" type="checkbox" />
                   <label htmlFor="collapsible4" className="moreInfoBtn lbl-toggle"><TagOutlined className="tagIconColor"/><br></br>More Info <br></br> 75$ </label>
                         <div className="collapsible-content">
                             <div className="content-inner">
                                 <p>Diamond Perks
                                     <li className="perks">Receive a personal contact number with the Dojo Sensei Team</li>
                                     <li className="perks">Exclusive One on One video call with the Dojo Sensei</li>
                                     <li className="perks">Able to become a Instructor to sell courses</li>
                                     <li className="perks">Exclusive training routine insights.</li>
                                     <li className="perks">Access to Exclusive Blog posts</li>
                                     <li className="perks">Exclusive Free Lessons Access </li>
                                     <li className="perks">Access All Subscriber posts</li>
                                     <li className="perks">Access Available Instructors Lessons</li>
                                     <li className="perks">Access Exclusive News Feed</li>
                                 </p>
                                 <p>Diamond Rewards
                                     <li className="perks">Receive a personalized Mug</li>
                                     <li className="perks">Five ticket entries for Elite monthly drop</li>
                                     <li className="perks">One ticket entry for Diamond raffle monthly drop</li>
                                 </p>
                             </div>
                         </div>
                 </div>
               </div>
               <div href="/" className="classStargem">
                 <div className="headerContainer"><div className="classHeader"></div></div>
                 <p className="classTitle">Stargem</p>
                 <p className="classSubTitle">( Tier 6 )</p>
                 <Button
                    className="mb-3 mt-3 stargemButton logBut"
                    block
                    shape="round"
                    icon={<SketchCircleFilled />}
                    size="large"
                    disabled={(user && user.role && user.role.includes("Stargem")) ||
                              loading}
                    onClick={handlePaidStargemEnrollment}
                 >
                    Buy STARGEM
                 </Button>
                 <div className="classImgStargem"></div>
                 <footer><div className="classFooter"></div></footer>
                 <div className="wrap-collabsible">
                         <input id="collapsible5" className="toggle" type="checkbox" />
                         <label htmlFor="collapsible5" className="moreInfoBtn lbl-toggle"><TagOutlined className="tagIconColor"/><br></br>More Info <br></br> 100$ </label>
                         <div className="collapsible-content">
                             <div className="content-inner">
                                  <p>Stargem Perks
                                     <li className="perks">In person invite for a planned event</li>
                                     <li className="perks">Receive a personal contact number with the Dojo Sensei Team</li>
                                     <li className="perks">Exclusive One on One video call with the Dojo Sensei</li>
                                     <li className="perks">Able to become a Instructor to sell courses</li>
                                     <li className="perks">Exclusive training routine insights.</li>
                                     <li className="perks">Access to Exclusive Blog posts</li>
                                     <li className="perks">Exclusive Free Lessons Access </li>
                                     <li className="perks">Access All Subscriber posts</li>
                                     <li className="perks">Access Available Instructors Lessons</li>
                                     <li className="perks">Access Exclusive News Feed</li>
                                 </p>
                                 <p>Stargem Rewards
                                     <li className="perks">Receive an exclusive podcast invite</li>
                                     <li className="perks">Receive a personalized T-Shirt</li>
                                     <li className="perks">Receive a personalized Mug</li>
                                     <li className="perks">Six ticket entries for Elite monthly drop</li>
                                     <li className="perks">One ticket entry for Stargem raffle monthly drop</li>
                                 </p>
                             </div>
                         </div>
                 </div>
               </div>
             </div>
          </div>
      <div className="subscribeLower">
            <div className="subscribeInfo">
                  <strong>Patronage</strong> isn't required<br></br> but <strong>directly</strong> supports
                  us <br></br> in the <strong>production</strong> of higher <strong>quality</strong> and <br></br> more frequent exclusive <strong>news!</strong> 
            </div>
      </div>
    </div>
  </h2>
  </UserRoute>
  );
};

export default Subscribe;
