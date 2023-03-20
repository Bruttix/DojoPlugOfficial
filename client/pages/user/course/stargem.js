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
    MinusCircleFilled, SketchCircleFilled, TagOutlined,
} from "@ant-design/icons";

import StargemRoute from "../../../components/routes/StargemRoute";
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
  /*const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) loadCourse();
  }, [slug]);

 

  const loadCourse = async () => {
    const { data } = await axios.get(`/api/user/course/silver`);
    console.log('loadCourse in bronze.js loaded',data);
  };

*/

  return (
      <StargemRoute>
          <h2 className="tierLander"><img className="stargemLander"></img>
              <div className="tierPage">
                  <div className="tierTitleStargem">
                      <strong className="stargemStrong">STARGEM</strong> Patron
                  </div>
                  <div>Subscription Earned Rewards</div>
               <div className="stargemHome">
                <div href="/" className="classStargem">
                 <div className="headerContainer"><div className="classHeader"></div></div>
                 <p className="classTitle">Stargem</p>
                 <p className="classSubTitle">( Tier 6 )</p>
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
          </h2>
      </StargemRoute>
  );
};

export default SingleCourse;
