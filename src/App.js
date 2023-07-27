import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import { Header } from "./components/Header";
import Home from "./components/Home.jsx";
import AllCourses from "./components/AllCourses.jsx";
import AddCourse from "./components/AddCourse.jsx";
import { Col, Container, Row } from "reactstrap";
import Menue from "./components/Menue";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <>
      <ToastContainer/>
      <Container>
        <Header/>

        <Row>
          <Col md={4}>
            <Menue/>
          </Col>
          <Col md={8}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="add-course" element={<AddCourse/>}/>
            <Route path="view-courses" element={<AllCourses/>}/>
            <Route path="about-us" element={<AboutPage/>}/>
            <Route path="contact-us" element={<ContactPage/>}/>
          </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
