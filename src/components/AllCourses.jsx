import React, { useEffect, useState } from "react";
import Course from "./Course.jsx";
import axios from "axios";
import baseURL from "./api/bootapi.jsx";
import { toast } from "react-toastify";

const AllCourses = () => {
  useEffect(() => {
    document.title = "All Course || Course Application";
  }, []);

  //function to call server
  const getAllCoursesFromServer = () => {
    axios.get(`${baseURL}/courses`).then(
      (response) => {
        //success
        console.log(response.data);
        setCourses(response.data);
        toast.success("Courses has been loaded");
      },
      (error) => {
        //for error
        console.log(error);
        toast.error("Oops! Something went wrong");
      }
    );
  };

  const reloadCourses = () => {
    getAllCoursesFromServer();
  };

  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const [courses, setCourses] = useState([]);

  const updateCList = (id) => {
    setCourses(courses.filter((c) => c.id != id));
  };

  return (
    <>
      <h1>All Course</h1>
      <p>List of courses are as follows</p>

      {courses.length > 0
        ? courses.map((item) => (
            <Course
              key={item.id}
              course={item}
              update={updateCList}
              reloadCourses={reloadCourses}
            />
          ))
        : "No courses"}
    </>
  );
};

export default AllCourses;
