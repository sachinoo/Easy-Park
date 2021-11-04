import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  //   useEffect(() => {
  //     const userInfo = localStorage.getItem("userInfo" , JSON.stringify(data));
  //     if(userInfo){
  //         history.push("./user");
  //     }

  // }, [history]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title"> Easy Park</h1>
              <p className="subtitle"> Parking Made Easy</p>
            </div>
            <div className="buttonContainer">
              <NavLink to="/login">
                <Button size="lg" className="landingbutton" variant="success">
                  RESIDENT LOGIN
                </Button>
              </NavLink>
              <NavLink to="/register">
                <Button size="lg" className="landingbutton" variant="primary">
                  RESIDENT SIGNUP
                </Button>
              </NavLink>
              <NavLink to="/management">
                <Button size="lg" className="landingbutton" variant="warning">
                  MANAGEMENT LOGIN
                </Button>
              </NavLink>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
