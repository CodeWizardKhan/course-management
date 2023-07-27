import axios from "axios";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
  Container,
} from "reactstrap";
import baseURL from "./api/bootapi.jsx";
import { toast } from "react-toastify";
import AddCourse from "./AddCourse.jsx";

const Course = ({ course, update, reloadCourses }) => {
  const deleteCourse = (id) => {
    axios.delete(`${baseURL}/courses/${id}`).then(
      (response) => {
        toast.success("Course is deleted");
        update(id);
      },
      (error) => {
        toast.error("Delete was unsuccessful");
      }
    );
  };

  const [componentLoad, setComponentLoad] = useState(false);

  const updateCourse = () => {
    componentLoad ? setComponentLoad(false) : setComponentLoad(true);
  };

  return (
    <>
      <Card className="text-center">
        <CardBody>
          <CardSubtitle className="font-weight-bold">
            {course.title}
          </CardSubtitle>
          <CardText>{course.description}</CardText>
          <Container className="text-center">
            <Button
              onClick={() => {
                deleteCourse(course.id);
              }}
              color="danger"
            >
              Delete
            </Button>
            <Button onClick={updateCourse} color="warning" className="m-3">
              Update
            </Button>
            {componentLoad && (
              <AddCourse
                courseList={course}
                componentLoad={componentLoad}
                setComponentLoad={setComponentLoad}
                reloadCourses={reloadCourses}
              />
            )}
          </Container>
        </CardBody>
      </Card>
    </>
  );
};

export default Course;
