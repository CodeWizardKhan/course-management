import React, { useEffect } from "react";
import { Container, Button } from "reactstrap";
import { useNavigate } from "react-router-dom"; // Import useHistory

const Home = () => {
  useEffect(() => {
    document.title = "Home || Course Application";
  }, []);

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleStartUsing = () => {
    // Redirect the user to the desired route when the button is clicked
    navigate("/about-us");
  };
  return (
    <>
      <div className="text-center">
        <div class="container-fluid bg-light text-dark p-5">
          <div class="container bg-light">
            <h1 class="display-4 fw-bold">Welcome to Admin Dashboard</h1>
            <hr />
            <p>Go to My Website</p>
            <Container>
              <Button onClick={handleStartUsing} color="primary" outline>
                Start Using
              </Button>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;