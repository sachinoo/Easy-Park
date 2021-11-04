import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import MainScreen from "../../Components/MainScreen";
import { useHistory } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

const ManagementView = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [users, setUsers] = useState([]);
  const [guest, setGuest] = useState([]);
  const [sortuser, setSortuser] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error.message));
  }, []);

  const apartmentName = userInfo.apartment;

  const filterUser = users.filter((users) => {
    return users.apartment === apartmentName;
  });

  console.log(filterUser);

  useEffect(() => {
    setSortuser(filterUser);
  }, []);
  console.log(users);
  return (
    <MainScreen title={`Welcome Back ${userInfo && userInfo.name}..`}>
      <Link to="/vdata">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          VISITOR DATA
        </Button>
      </Link>
      <Link to="/udata">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          USER DATA
        </Button>
      </Link>

      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th>#Unit</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Apartment</th>
            <th>Guest Code</th>
          </tr>
        </thead>
        <tbody>
          {filterUser.map((item) => (
            <tr key={item.id}>
              <td> {item.unit}</td>
              <td> {item.name}</td>
              <td> {item.email}</td>
              <td> {item.phone}</td>
              <td> {item.apartment}</td>
              <td> {item.guestcode}</td>
            </tr>
          ))}{" "}
        </tbody>
      </table>
    </MainScreen>
  );
};
export default ManagementView;
