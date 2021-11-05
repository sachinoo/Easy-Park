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
  const apartment = userInfo.apartment;
  console.log(unitNumber);

  const filterGuest = guest.filter((guest) => {
    return guest.unitNumber === unitNumber && guest.location === apartment;
  });
  console.log(filterGuest);

  const [resident, setResident] = useState([]);
  const[filterresident,setFilterresident] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/resident`)
      .then((response) => response.json())
      .then((data) => setResident(data))
      .catch((error) => console.log(error.message));
  }, []);

  const filterVehicle = resident.filter((resident) => {
    return resident.unit === unitNumber 
  });
  console.log(filterVehicle);


  useEffect(() => {
    setSortguest(filterGuest);
  }, []);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <MainScreen title={`Welcome Back ${userInfo && userInfo.name}..`}>
      <Link to="/guest">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          REGISTER GUEST
        </Button>
      </Link>
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            RESIDENT PROFILE
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            RESIDENT VEHICLES
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            VISITOR VEHICLES
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <hr />

            <div class="card2">
              <h1></h1>
              <p class="title2">Name:{userInfo.name}</p>
              <p class="title2">UserId:{userInfo._id}</p>
              <p class="title2">Email:{userInfo.email}</p>
              <p class="title2">Apartment:{userInfo.apartment}</p>
              <p class="title2">Unit:{userInfo.unit}</p>
              <p class="title2">Guest Code:{userInfo.guestcode}</p>
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <hr />
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">MAKE</th>
                  <th scope="col">MODEL</th>
                  <th scope="col">YEAR</th>
                  <th scope="col">GARAGE NO.</th>
                  <th scope="col">PLATE</th>
                </tr>
              </thead>
              <tbody>
                {filterVehicle.map((item) => (
                  <tr>
                    <td> {item.make}</td>
                    <td> {item.model}</td>
                    <td> {item.year}</td>
                    <td> {item.garage}</td>
                    <td> {item.licenseplate}</td>
                  </tr>
                ))}{" "}
              </tbody>
            </table>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <hr />
            <div className="datatable">
              <h1> REGISTERED VISITORS </h1>
              <h2> Apartment Unit: {unitNumber}</h2>
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
                    <th>Spot Number</th>
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
            </div>
          </div>
        </div>
      </div>
    </MainScreen>
  );
};

export default User;
