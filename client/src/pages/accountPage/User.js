/* eslint-disable */

import { useEffect, useState } from "react";
import MainScreen from "../../Components/MainScreen";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listVehicles } from "../../actions/vehiclesActions";
import ErrorMessage from "../../Components/ErrorMessaage";
import { useHistory } from "react-router-dom";
import "./User.css";

const User = () => {
  const dispatch = useDispatch();
  const vehiclesList = useSelector((state) => state.vehiclesList);
  const { loading, vehicles, error } = vehiclesList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const history = useHistory();

  useEffect(() => {
    dispatch(listVehicles());
    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch]);

  const [guest, setGuest] = useState([]);
  const [sortguest, setSortguest] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/guest`)
      .then((response) => response.json())
      .then((data) => setGuest(data))
      .catch((error) => console.log(error.message));
  }, []);

  console.log(guest);
  const unitNumber = userInfo.unit;
  console.log(unitNumber);

  const filterGuest = guest.filter((guest) => {
    return guest.unitNumber === unitNumber;
  });
  console.log(filterGuest);

  useEffect(() => {
    setSortguest(filterGuest);
  }, []);


  return (
    <MainScreen title={`Welcome Back ${userInfo && userInfo.name}..`}>
      <Link to="/guest">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          REGISTER GUEST
        </Button>
      </Link>
      <div className="container">
        <form method="GET">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-6">
              <div className="profile-head">
                <p className="profile-rating mt-3 mb-"> </p>
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="vehicle-tab"
                      data-toggle="tab"
                      href="#vehicle"
                      role="tab"
                    >
                      Vehicles
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="profile-work"></div>
              </div>

              <div className=" col-md-8 pl-5 about-info">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home-tab"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row mt-4">
                      <div className="col-md-6">
                        <label>User ID</label>
                      </div>
                      <div className="col-md-6">
                        <p> {userInfo?._id}</p>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <p> {userInfo?.name}</p>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <label>Apartment</label>
                      </div>
                      <div className="col-md-6">
                        <p> {userInfo?.apartment} </p>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <label> Unit</label>
                      </div>
                      <div className="col-md-6">
                        <p> {userInfo?.unit}</p>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div className="col-md-6">
                        <p> {userInfo?.phone}</p>
                      </div>
                    </div>

                    <div className="row mt-1">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p> {userInfo?.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <h1> REGISTERED VISITORS IN {unitNumber}</h1>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th>Location</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Unit Number</th>
            <th>Vehicle Make</th>
            <th>Vehicle Model</th>
            <th>Spot Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filterGuest.map((item) => (
            <tr>
              <td> {item.location}</td>
              <td> {item.firstName}</td>
              <td> {item.lastName}</td>
              <td> {item.phoneNumber}</td>
              <td> {item.unitNumber}</td>
              <td> {item.vehicleMake}</td>
              <td> {item.vehicleModel}</td>
              <td> {item.lisencePlate}</td>
              <td> {item.spotNumber}</td>
            </tr>
          ))}{" "}
        </tbody>
      </table>
    </MainScreen>
  );
};

export default User;
