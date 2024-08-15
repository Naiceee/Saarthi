import { useState } from "react";

import CourseCard from "../components/UI/CourseCard";
import CourseForm from "../components/UI/CourseForm";

function Dashboard() {
  const [courseName, setCourseName] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [courseList, setCourseList] = useState([]);

  const courseNameHandler = (e) => {
    setCourseName(e.target.value);
  };

  const videoLinkHandler = (e) => {
    setVideoLink(e.target.value);
  };

  const teacherNameHandler = (e) => {
    setTeacherName(e.target.value);
  };

  const addCourseHandler = (e) => {
    e.preventDefault();
    setCourseList((prevState) => [
      ...prevState,
      { key: courseName + Math.random(), name: courseName, link: videoLink, teacher: teacherName },
    ]);
    setCourseName('');
    setVideoLink('');
    setTeacherName('');
  };

  return (
    <>
      <CourseForm
        courseNameHandler={courseNameHandler}
        videoLinkHandler={videoLinkHandler}
        teacherNameHandler={teacherNameHandler}
        onSubmitHandler={addCourseHandler}
      />
      <div className="flex gap-2 flex-wrap">
        {courseList.map((list) => (
          <CourseCard
            key={list.key}
            courseName={list.name}
            videoLink={list.link}
            teacherName={list.teacher}
          />
        ))}
      </div>
    </>
  );
}

export default Dashboard;
