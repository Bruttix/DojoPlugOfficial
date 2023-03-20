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
  MinusCircleFilled,SketchCircleFilled, TagOutlined,
} from "@ant-design/icons";

import BronzeRoute from "../../../components/routes/BronzeRoute";
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
    const { data } = await axios.get(`/api/user/course/bronze`);
    console.log('loadCourse in bronze.js loaded',data);
  };

*/

  return (
      <BronzeRoute>
          
          <h2 className="tierLander"><img className="bronzeLander"></img>
              <div className="tierPage">
                  <div className="tierTitleBronze">
                      <strong className="bronzeStrong">BRONZE</strong> Patron
                  </div>
                  
             <div className="bronzeHome">
               <div href="/" className="classBronze">
                 <div className="headerContainer"><div className="classHeader"></div></div>
                 <p className="classTitle">Bronze</p>
                 <p className="classSubTitle">( Tier 1 )</p>
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
             </div>
           </div>
          </h2>
      </ BronzeRoute >
  );
};

export default SingleCourse;
