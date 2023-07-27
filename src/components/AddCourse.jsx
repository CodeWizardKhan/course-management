import { Input, Form, FormGroup, Container, Button } from "reactstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import baseURL from "./api/bootapi.jsx";
import { toast } from "react-toastify";

const AddCourse = ({
  courseList,
  componentLoad,
  setComponentLoad,
  reloadCourses,
}) => {
  useEffect(() => {
    document.title = "Add Course || Course Application";
    if (componentLoad) {
      // Set only the ID field when componentLoad is true, and reset others to empty strings
      setCourse({ ...course, id: courseList.id || "" });
    }
  }, [componentLoad, courseList]);

  const [course, setCourse] = useState({ id: "", title: "", description: "" });

  //Form Handler Function
  const handleForm = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (course.id && course.title && course.description) {
      postData_toServer(course);
      componentLoad && setComponentLoad(false);
    } else {
      toast.error("Please fill in all fields");
    }
  };

  const postData_toServer = (data) => {
    const postData = {
      id: componentLoad ? data.id : data.id,
      title: data.title,
      description: data.description,
    };
    axios.post(`${baseURL}/courses`, postData).then(
      (response) => {
        console.log(response);
        toast.success("Course has been Added Successfully");
        setCourse({ id: "", title: "", description: "" }); // Reset the course state
        // Trigger data reload in AllCourses component by calling the reloadCourses function
        componentLoad && reloadCourses();
      },
      (error) => {
        console.log(error);
        toast.error("Oops! Something went wrong");
      }
    );
  };

  return (
    <>
      <h1 className="text-center my-3">Fill Course Details</h1>
      <Form id="courseForm">
        <FormGroup>
          <label htmlFor="userId">Course Id</label>
          <Input
            type="number"
            placeholder="Enter ID here"
            name="userId"
            id="userId"
            value={course.id}
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="title">Course Title</label>
          <Input
            type="text"
            placeholder="Enter title here"
            id="title"
            value={course.title}
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="description">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            id="description"
            value={course.description}
            style={{ height: 100 }}
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>

        <Container className="text-center">
          <Button onClick={handleForm} color="success">
            {componentLoad ? "Update Course" : "Add Course"}
          </Button>
          <Button
            onClick={() => setCourse({ id: "", title: "", description: "" })}
            color="warning"
            className="ms-3"
          >
            Clear
          </Button>
        </Container>
      </Form>
    </>
  );
};

export default AddCourse;
