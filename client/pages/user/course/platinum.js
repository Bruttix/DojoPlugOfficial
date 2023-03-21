import React, { useState, useEffect, createElement } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import StudentRoute from "../../../components/routes/StudentRoute";
import { Button, Menu, Avatar } from "antd";
import ReactPlayer from "react-player";
import ReactMarkdown from "react-markdown";
import {
  PlayCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CheckCircleFilled,
  MinusCircleFilled,SketchCircleFilled, TagOutlined,UserOutlined,
} from "@ant-design/icons";

import PlatinumRoute from "../../../components/routes/PlatinumRoute";
const { Item } = Menu;

const SingleCourse = () => {
  const [clicked, setClicked] = useState(-1);
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState({ lessons: [] });
  const [completedLessons, setCompletedLessons] = useState([]);
  // force state update
  const [updateState, setUpdateState] = useState(false);

  // router
 /* const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) loadCourse();
  }, [slug]);

 

  const loadCourse = async () => {
    const { data } = await axios.get(`/api/user/course/silver`);
    console.log('loadCourse in bronze.js loaded',data);
  };
*/
    const manageSubscriptions = async () => {
        const { data } = await axios.get("/api/customer-portal");
        window.open(data);
    };

  return (
      <PlatinumRoute>
           <h2 className="tierLander"><img className="platinumLander"></img>
              <div className="tierPage">
                  <div className="tierTitlePlatinum">
                      <strong className="platinumStrong">PLATINUM</strong> Patron
                  </div>
                  
                  <div className="goldHome">
                      <div href="/" className="classPlatinum">
                          <div className="headerContainer"><div className="classHeader"></div></div>
                          <p className="classTitle">Platinum</p>
                          <p className="classSubTitle">( Tier 4 )</p>
                          <div className="classImgPlatinum"></div>
                          <footer><div className="classFooter"></div></footer>
                          <div className="wrap-collabsible">
                              <input id="collapsible3" className="toggle" type="checkbox" />
                              <label htmlFor="collapsible3" className="moreInfoBtn lbl-toggle"><TagOutlined className="tagIconColor" /><br></br>More Info <br></br> 50$</label>
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
               </div>
                <div className="manageSubscribeContainer">
                   <div className="accountNav">
                     <div className="container">
                       <div className="row accountHead">
                         <UserOutlined className="display-4" />
                         <h1>Manage Account</h1><br></br>
                         <p className="lead manageSubPara pb-4">Platinum status</p>
                         {/* <pre>{JSON.stringify(roles, null, 4)}</pre> */}
                       </div>
                     
                       <div className="row">
                       {/*  {roles &&
                           roles.map((sub) => (*/}
                             <div className="manageSubSection">
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
                                   className="btn btn-outline-warning manageSubBtn"
                                 >
                                   Manage Subscription
                                 </button>
                               </section> 
                             </div> 
                           {/*))}*/}
                       </div>
                           <p className="lead pb-4">Adjust your Subscription in a Simple Click!</p>
                     </div>
                      </div>
                </div>
              </div>
          </h2>
      </PlatinumRoute>
  );
};

export default SingleCourse;