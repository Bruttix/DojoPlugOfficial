import { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "../components/cards/CourseCard";
import {
    CrownOutlined, CreditCardOutlined, AreaChartOutlined, ToolOutlined, StarOutlined, SketchOutlined, GlobalOutlined, FormOutlined, TagOutlined 
} from "@ant-design/icons";
const Index = ({ courses }) => {
  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     const { data } = await axios.get("/api/courses");
  //     setCourses(data);
  //   };
  //   fetchCourses();
  // }, []);

  return (
    <>
      <h1 className="jumbotron text-center marketplaceHeader square">
       DOJO PLUG
      </h1>
      <div className="wrapperMain">
        <div className="whoDojoPicClear">
              <div className="whoDojoPic"></div>
        </div>
        <div className="whoDojoUs"> At <strong>Dojo Plug</strong> we are <strong>elevating atheletes</strong> around the <strong>world</strong> by providing independent <strong>highly customized</strong> ecommerce platforms
          <div className="whoDojoIconList">
            <span className="whyDojoSpan"><CrownOutlined className="whyDojoIcons"/>Fully Customizable</span>
            <span className="whyDojoSpan"><StarOutlined className="whyDojoIcons"/>No Split Earnings</span>
            <span className="whyDojoSpan"><SketchOutlined className="whyDojoIcons"/>Full Ownership</span>
            <span className="whyDojoSpan"><ToolOutlined className="whyDojoIcons"/>Easy to Expand or Grow</span><br></br>
            <span className="whyDojoSpan"><CreditCardOutlined className="whyDojoIcons"/>Secured Payment Processing</span>
            <span className="whyDojoSpan"><AreaChartOutlined className="whyDojoIcons"/>Tier Hierarchy Services</span>
            <span className="whyDojoSpan"><GlobalOutlined className="whyDojoIcons"/>World Wide Reach</span><br></br>
            <span className="whyDojoSpan"><FormOutlined className="whyDojoIcons"/>Offer Premium Lessons</span>
          </div>
        </div>
        <br></br>
      </div>
      <div className="container-fluid mainLanderInfoBox">
        <div className="row col-md-4 mainLandPageTitle">
          <p className="whoDojoPara"><strong>Why</strong> does it <strong>matter</strong>?</p>
            <div className="whoDojoPara">
                The <strong>typical mainstream</strong> providers <strong>prey</strong> on unexpecting uninformed <strong>individuals</strong>
                <br></br> with <strong>absurd</strong> increasing aggressive <strong>costs</strong>, <strong>minimal</strong> customization, <strong>bad</strong> customer service.
                <br></br>
                <strong>NO LONGER ACCEPT </strong>outdated, underperformant,<strong> bad</strong>, malicious, and mediocre <strong>software providers</strong> who
                <br></br> tend to <strong>always</strong> have their <strong>hand</strong> in your <strong>earnings.</strong>
                <br></br><br></br>
                <br></br><strong className="chooseDojo">DOJO PLUG</strong> is the <strong className="chooseDojo">answer</strong> to <strong className="chooseDojo">professionals</strong> who are looking to <strong className="chooseDojo">level up</strong> their
                <br></br> <strong className="chooseDojo">business</strong> or social platforms while <strong className="chooseDojo">maximizing profits</strong> and <strong className="chooseDojo">global accessibility</strong>.
                <br></br>
                <strong className="chooseDojo">Dream</strong> it and we <strong className="chooseDojo">Build</strong> it.
                <br></br>
                Personalized 1-on-1 direct communication ensures the developmental process of your websites creation surpasses expectations and on time.
                <br></br>
                <div className="whoDojoList">
                <li className="whoDojoLi">No profits splitting</li>
                <li className="whoDojoLi">No hassle process </li>
                <li className="whoDojoLi">Full Customization </li>
                <li className="whoDojoLi">Ease-of-Use Design </li>
                <li className="whoDojoLi">Fully Available Customer Support</li>
                <li className="whoDojoLi">Able to Expand</li>
                </div>
                Your platform can <strong className="chooseDojo">also allow</strong> your top atheletes/supporters to <strong className="chooseDojo">sell paid courses</strong> on your website in <strong className="chooseDojo">partnership</strong> with you!
            </div>
        </div>
      </div><div className="homeSpaceBox"></div>

       <div className="subscribeContainer">
              <div className="bannerAlignFirst">
                  <div className="splashHeader"></div>
                  <div className="inverseHeader"></div>
              </div>
           <div className="subscribeHead">HIERARCHY MEMBERSHIP LEVELS</div>
           <div className="subscribePara"> Full Customization of Rewards, Tiers, and More! </div>
           <div className="classes">
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
                                   <li className="perks">Exclusive invite to the Dojo Forum</li>
                                   <li className="perks">Exclusive Dojo Lessons Access </li>
                                   <li className="perks">Access to latest Instructor posts</li>
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
               <div className="classImgSilver"></div>
               <footer><div className="classFooter"></div></footer>
               <div className="wrap-collabsible">
                       <input id="collapsible1" className="toggle" type="checkbox" />
                       <label htmlFor="collapsible1" className="moreInfoBtn lbl-toggle"><TagOutlined className="tagIconColor"/><br></br>More Info <br></br> 10$</label>
                       <div className="collapsible-content">
                           <div className="content-inner">
                               <p>Silver Perks
                                   <li className="perks">Exclusive invite to the Dojo Forum</li>
                                   <li className="perks">Exclusive training routine insights</li>
                                   <li className="perks">Access to Exclusive Blog posts</li>
                                   <li className="perks">Exclusive Dojo Lessons Access </li>
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
               <div className="classImgGold"></div>
               <footer><div className="classFooter"></div></footer>
               <div className="wrap-collabsible">
                       <input id="collapsible2" className="toggle" type="checkbox" />
                       <label htmlFor="collapsible2" className="moreInfoBtn lbl-toggle"><TagOutlined className="tagIconColor"/><br></br>More Info <br></br> 20$</label>
                       <div className="collapsible-content">
                           <div className="content-inner">
                               <p>Gold Perks
                                   <li className="perks">Able to become a Instructor to sell courses.</li>
                                   <li className="perks">Exclusive invite to the Dojo Forum</li>
                                   <li className="perks">Exclusive training routine insights</li>
                                   <li className="perks">Access to Exclusive Blog posts</li>
                                   <li className="perks">Exclusive Dojo Lessons Access </li>
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
               <div className="classImgPlatinum"></div>
               <footer><div className="classFooter"></div></footer>
               <div className="wrap-collabsible">
                       <input id="collapsible3" className="toggle" type="checkbox" />
                       <label htmlFor="collapsible3" className="moreInfoBtn lbl-toggle"><TagOutlined className="tagIconColor"/><br></br>More Info <br></br> 50$</label>
                       <div className="collapsible-content">
                           <div className="content-inner">
                               <p>Platinum Perks
                                   <li className="perks">Exclusive One on One video call with the Dojo Sensei</li>
                                   <li className="perks">Able to become a Instructor to sell courses</li>
                                   <li className="perks">Exclusive invite to the Dojo Forum</li>
                                   <li className="perks">Exclusive training routine insights</li>
                                   <li className="perks">Access to Exclusive Blog posts</li>
                                   <li className="perks">Exclusive Dojo Lessons Access </li>
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
                                   <li className="perks">Exclusive invite to the Dojo Forum.</li>
                                   <li className="perks">Exclusive training routine insights.</li>
                                   <li className="perks">Access to Exclusive Blog posts</li>
                                   <li className="perks">Exclusive Dojo Lessons Access </li>
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
               <div className="classImgStargem"></div>
               <footer><div className="classFooter"></div></footer>
               <div className="wrap-collabsible">
                       <input id="collapsible5" className="toggle" type="checkbox" />
                       <label htmlFor="collapsible5" className="moreInfoBtn lbl-toggle"><TagOutlined className="tagIconColor"/><br></br>More Info <br></br> 150$ </label>
                       <div className="collapsible-content">
                           <div className="content-inner">
                                <p>Stargem Perks
                                   <li className="perks">In person invite for a planned event</li>
                                   <li className="perks">Receive a personal contact number with the Dojo Sensei Team</li>
                                   <li className="perks">Exclusive One on One video call with the Dojo Sensei</li>
                                   <li className="perks">Able to become a Instructor to sell courses</li>
                                   <li className="perks">Exclusive training routine insights.</li>
                                   <li className="perks">Access to Exclusive Blog posts</li>
                                   <li className="perks">Exclusive Dojo Lessons Access </li>
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

      <div className="footerAdjust"></div>
    </>
  );
};

export default Index;
