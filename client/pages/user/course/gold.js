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

import GoldRoute from "../../../components/routes/GoldRoute";
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
*/
 
/*
  const loadCourse = async () => {
    const { data } = await axios.get(`/api/user/course/gold`);
    console.log('loadCourse in bronze.js loaded',data);
  };*/



  return (
      <GoldRoute>
          
          <h2 className="tierLander"><img className="goldLander"></img>
              <div className="tierPage">
                  <div className="tierTitleGold">
                      <strong className="goldStrong">GOLD</strong> Patron
                  </div>
                  
                  <div className="goldHome">
                      <div href="/" className="classGold">
                          <div className="headerContainer"><div className="classHeader"></div></div>
                          <p className="classTitle">Gold</p>
                          <p className="classSubTitle">( Tier 3 )</p>
                          <div className="classImgGold"></div>
                          <footer><div className="classFooter"></div></footer>
                          <div className="wrap-collabsible">
                              <input id="collapsible2" className="toggle" type="checkbox" />
                              <label htmlFor="collapsible2" className="moreInfoBtn lbl-toggle"><TagOutlined className="tagIconColor" /><br></br>More Info <br></br> 20$</label>
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
               </div>
              </div>
          </h2>
      </GoldRoute>
  );
};

export default SingleCourse;