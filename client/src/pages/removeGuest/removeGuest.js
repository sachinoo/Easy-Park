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

import * as parksData from "../../data/parking.json";
import bgImage from "../../images/parkingImage3.jpg";
import axios from "axios";
import "../guestPage/Guest.css";

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



function Guest() {
  const [spot, setSpot] = useState([]); // array to store parkings
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
    unitNumber: "",
    lisencePlate: "",
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
      unitNumber: input.unitNumber,
      lisencePlate: input.lisencePlate,
      spotNumber: input.spotNumber
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
      axios.post("http://localhost:5000/removeguest", spotInfo);
      window.alert("Removal Successful, Thank you!");
    }
    // axios
    //   .post(`http://localhost:5000/updatespot`, spotInfo)
    //   .then((response) => {
    //     console.log(response.data);
    //   });

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
        if (!spot.value) {
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
                Guest Vehicle Removal form
              </Typography>
              <Typography
                gutterBottom
                variant="body"
                color="textSecondary"
                component="p"
              >
                Fill out the form to remove your vehicle
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
                
                
                
                
                <Grid xs={12} xs={6} item>
                  <TextField
                    name="lisencePlate"
                    value={input.lisencePlate}
                    label="lisence Plate number"
                    placeholder="Enter vehicle plate number"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleChange}
                  />
                </Grid>
                
                <Grid xs={12} xs={6} item>
                  <TextField
                    name="unitNumber"
                    value={input.unitNumber}
                    label="Unit Number"
                    placeholder="Enter unit Number"
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
                    Remove Vehicle
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </form>
      </div>
    </MainContainer>
  );
}

export default Guest;
