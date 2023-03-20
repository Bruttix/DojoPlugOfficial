import { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "../../components/cards/CourseCard";
import InstructorRoute from "../../components/routes/InstructorRoute";
const UserIndex = ({ courses }) => {
  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     const { data } = await axios.get("/api/courses");
  //     setCourses(data);
  //   };
  //   fetchCourses();
  // }, []);

  return (
    <InstructorRoute>
     <h2 className="subscribeContain" >
       <img className="heropageBG"></img>
      <div className="subscribeBigBox">
       <h1 className="jumbotron text-center marketplaceHeader square">
         Exclusive Lessons
       </h1>
       <div className="container-fluid">
         <div className="row">
           {courses.map((course) => (
             <div key={course._id} className="col-md-4">
               <CourseCard course={course} />
             </div>
           ))}
         </div>
       </div>
      </div>
     </h2>
    </InstructorRoute>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/courses`);
  return {
    props: {
      courses: data,
    },
  };
}

export default UserIndex;
