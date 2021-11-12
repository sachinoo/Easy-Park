/* eslint-disable */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { Link } from "react-router-dom";
import * as parksData from "../../data/parking.json";
import bgImage from "../../images/parkingImage3.jpg";
import axios from "axios";
import "./Guest.css";

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 1.5rem;
  margin-top: 1rem;
  color: Yellow;
  text-shadow: 2px 2px brown;
  p {
    font-size: 1rem;
    font-display: initial;
  }
`;
const MainContainer = styled.div`
  background-image: url(${bgImage});
  background-position: center;
  background-size: cover;
`;
const Input = styled.input`
  padding: 10px;
  width: 100%;
  background-color: #fff;
  border: 1px solid black;
  font-size: 20px;
  color: black;
`;

let numberofParkings;

const initialState = {
  location: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  unitNumber: "",
  vehicleMake: "",
  vehicleModel: "",
  lisencePlate: "",
  last4Digits: "",
  spotNumber: "",
};

function Map() {
  const [selectedPark, setSelectedPark] = useState(null);
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 33.600730247541044, lng: -101.89361481744483 }}
    >
      {parksData.features.map((parking) => (
        <Marker
          key={parking.properties.PARK_ID}
          position={{
            lat: parking.geometry.coordinates[1],
            lng: parking.geometry.coordinates[0],
          }}
          onClick={() => {
            setSelectedPark(parking);
          }}
          icon={{
            url: {},
          }}
        />
      ))}

      {selectedPark && (
        <InfoWindow
          position={{
            lat: selectedPark.geometry.coordinates[1],
            lng: selectedPark.geometry.coordinates[0],
          }}
          onCloseClick={() => {
            setSelectedPark(null);
          }}
        >
          <div>
            <h2>{selectedPark.properties.NAME}</h2>
            <p>{selectedPark.properties.DESCRIPTIO}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

function Guest() {
  const [spot, setSpot] = useState([]);
  const [isAptClicked, setIsAptClicked] = useState(false);
  const [isclicked, setisClicked] = useState(false);
  const [location, setLocation] = useState([]);

  const [parkings, setparkings] = useState({
    location: "",
    number: "",
  });

  useEffect(() => {
    fetch(`http://localhost:5000/search`)
      .then((response) => response.json())
      .then((data) => setSpot(data))
      .catch((error) => console.log(error.message));
  }, []);

  console.log(spot);
  spot.map(function (spot) {
    parkings.location = spot.location;
    parkings.number = spot.numbers;
  });

  console.log(parkings);

  const [input, setInput] = useState({
    location: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    unitNumber: "",
    vehicleMake: "",
    vehicleModel: "",
    lisencePlate: "",
    last4Digits: "",
    spotNumber: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    setisClicked(!isclicked);
  }

  function handleChange2(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });

    // ?term=${value}
    axios.get(`http://localhost:5000/search`).then((res) => {
      if (typeof res != "undefined") {
        res.data.map((element, index) => {
          if (!location.includes(element.location)) {
            setLocation((oldArray) => [...oldArray, element.location]);
            console.log(element);
          }
        });
      }
    });
  }

  function handleApt() {
    setisClicked(!isclicked);
    setIsAptClicked(true);
  }

  function handleOnClick(event) {
    event.preventDefault();

    const guestInfo = {
      location: input.location,
      firstName: input.firstName,
      lastName: input.lastName,
      phoneNumber: input.phoneNumber,
      unitNumber: input.unitNumber,
      vehicleMake: input.vehicleMake,
      vehicleModel: input.vehicleModel,
      lisencePlate: input.lisencePlate,
      last4Digits: input.last4Digits,
      spotNumber: input.spotNumber,
    };
    const spotInfo = {
      location: input.location,
      spotNumber: input.spotNumber,
    };
    console.log(spotInfo);

    if (parkings.location != guestInfo.location) {
      console.log(spot.location);
      window.alert("The apartment does not exist");
    } else {
      axios.post("http://localhost:5000/guest", guestInfo);
      window.alert("Registration Successful, Thank you!");
    }
    axios
      .post(`http://localhost:5000/updatespot`, spotInfo)
      .then((response) => {
        console.log(response.data);
      });

    setInput({ ...initialState });
  }

  function handleSpot() {
    //   var o = formid.spots[formid.spots.selectedIndex].text;
    var sp = document.getElementById("spots");
    if (sp != null) {
      console.log(sp);
      input.spotNumber = sp.value;
      //   setInput({...input, spotNumber: sp.value})
    }
    //   var option = sp.options[sp.selectedIndex].text
  }
  function showSpot() {
    var arr = [];

    spot.map((element, index) => {
      element.available.map((spot, index) => {
        if (spot.value) {
          console.log(spot);

          arr.push(
            <option key={spot.id} value={spot.id}>
              {" "}
              Spot {spot.id}
            </option>
          );
        }
      });
    });
    return arr;
  }

  return (
    <MainContainer>
      <Intro>
        <h3>Welcome to our Guest Vehicle Registration System</h3>
        <p>
          Our application will allow users to temporarily register their
          vehicles in the selected parking premise for 24 hours. It only takes a
          minute to complete the process and You do not have to worry about
          geting your vehicles towed for next 24 hours. Since the parking is
          temporary your information will be deleted from the databse.
        </p>
      </Intro>
      <div className="mainContainer">
        <form id="form">
          <Card
            style={{
              maxHeight: 1500,
              maxWidth: 900,
              margin: "50px auto",
              padding: "10px 5px",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5">
                Guest Vehicle Registration form
              </Typography>
              <Typography
                gutterBottom
                variant="body"
                color="textSecondary"
                component="p"
              >
                Fill out the form to register your vehicle
              </Typography>
              <Grid container spacing={2}>
                <Grid xs={12} item>
                  <TextField
                    name="location"
                    value={input.location}
                    label="Search"
                    type="search"
                    placeholder="Search/Enter Parking or Apartment name"
                    placeholderFontSize="20px"
                    onChange={handleChange2}
                    onClick={handleClick}
                    required
                    fullWidth
                    spotFun
                  />

                  {isclicked &&
                    input.location &&
                    location.map((element, index) => {
                      if (
                        element
                          .toLowerCase()
                          .includes(input.location.toLowerCase())
                      ) {
                        return (
                          <p
                            onClick={() => {
                              setInput({
                                location: element,
                              });
                              numberofParkings = element.numbers;
                              handleApt();
                              console.log(element);
                            }}
                          >
                            {element}
                          </p>
                        );
                      }
                    })}
                </Grid>

                <Grid xs={12} item>
                  <label for="spots">Choose a parking spot:</label>
                  <select
                    class="spots"
                    name="spots"
                    id="spots"
                    onChange={handleSpot()}
                  >
                    {isAptClicked && showSpot()}
                  </select>
                  {/* <TextField name='spotNumber' value={input.spotNumber} label="Spot Number" placeholder="Enter spotNumber" variant="outlined" fullWidth required onChange={handleChange} /> */}
                </Grid>

                <Grid xs={12} sm={6} item>
                  <TextField
                    onChange={handleChange}
                    name="firstName"
                    value={input.firstName}
                    label="First Name"
                    placeholder="Enter first Name"
                    variant="outlined"
                    fullWidth
                    type="string"
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    name="lastName"
                    value={input.lastName}
                    label="Last Name"
                    placeholder="Enter Last Name"
                    variant="outlined"
                    fullWidth
                    required
                    type="string"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    name="phoneNumber"
                    value={input.phoneNumber}
                    label="Phone Number"
                    placeholder="Enter your phone number"
                    variant="outlined"
                    fullWidth
                    required
                    type="number"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    name="unitNumber"
                    value={input.unitNumber}
                    label="Unit Number"
                    placeholder="Enter your unit number"
                    variant="outlined"
                    placeholder="Enter the apt number"
                    variant="outlined"
                    fullWidth
                    required
                    type="Number"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    name="vehicleMake"
                    value={input.vehicleMake}
                    label="Vehicle Make"
                    placeholder="Enter vehicle make e.g. Honda"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleChange}
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    name="vehicleModel"
                    value={input.vehicleModel}
                    label="Vehicle Model"
                    placeholder="Enter vehicle model e.g. Civic "
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleChange}
                  />
                </Grid>
                <Grid xs={12} xs={6} item>
                  <TextField
                    name="lisencePlate"
                    value={input.lisencePlate}
                    label="Lisence Plate number"
                    placeholder="Enter vehicle plate number"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleChange}
                  />
                </Grid>
                <Grid xs={12} xs={6} item>
                  <TextField
                    type="number"
                    name="last4Digits"
                    value={input.last4Digits}
                    label="Last 4 digit phoneNumber"
                    placeholder="Enter unit owner last 4 digit of their phone number"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleChange}
                  />
                </Grid>

                <Grid xs={12} item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    fullWidth
                    onClick={handleOnClick}
                  >
                    Register
                  </Button>
                </Grid>
                <Grid>
                  Looking to Remove Permit ?{" "}
                  <Link to="/removevehicle">Click Here</Link>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </form>

        <div className="maps" style={{ width: "50vw", height: "60vh" }}>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,
  places&key=AIzaSyDO8I3nWxsl90sG7Cfjz6yX7YWpVjznX2Y`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
          />
        </div>
      </div>
    </MainContainer>
  );
}

export default Guest;
