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
  CheckCircleFilled, SketchCircleFilled, TagOutlined,
  MinusCircleFilled,
} from "@ant-design/icons";
import SilverRoute from "../../../components/routes/SilverRoute";
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
/*  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) loadCourse();
  }, [slug]);

 

  const loadCourse = async () => {
    const { data } = await axios.get(`/api/user/course/silver`);
    console.log('loadCourse in bronze.js loaded',data);
  };*/



  return (
      <SilverRoute>
         

          <h2 className="tierLander"><img className="silverLander"></img>
              <div className="tierPage">
                  <div className="tierTitleSilver">
                      <strong className="silverStrong">SILVER</strong> Patron
                  </div>

                 <div className="silverHome">
                    <div href="/" className="classSilver">
                      <div className="headerContainer"><div className="classHeader"></div></div>
                      <p className="classTitle">Silver</p>
                      <p className="classSubTitle">( Tier 2 )</p>
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
                 </div>
              </div>
          </h2>
      </SilverRoute>
  );
};

export default SingleCourse;