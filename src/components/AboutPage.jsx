import React from "react";

const AboutPage = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">About Our Courses Application</h1>
      <p>
        Welcome to the Courses Application, a platform where you can explore and manage various courses.
        This application allows you to view a list of available courses, add new courses, update existing ones,
        and delete courses as needed.
      </p>
      <p>
        Our goal is to provide an intuitive and user-friendly interface for users to interact with the courses database.
        Whether you are a student looking for new courses or an administrator managing the course catalog, this application
        caters to all your needs.
      </p>
      <p>
        The Courses Application is built using React for the frontend and Spring Boot for the backend.
        React is a powerful JavaScript library that allows us to create dynamic and responsive user interfaces,
        while Spring Boot provides a robust and efficient server-side solution to handle data management and APIs.
      </p>
      <p>
        We are continuously working to improve the application and add new features to enhance your experience.
        If you have any feedback or suggestions, please feel free to reach out to us. Your feedback is valuable to us
        as we strive to make this application even better.
      </p>
      <p>
        Thank you for using the Courses Application. We hope you have a great experience exploring and managing courses
        with our platform.
      </p>
    </div>
  );
};

export default AboutPage;
