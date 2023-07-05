import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Read() {

  const setData = (data) => {
    console.log(data);
    localStorage.setItem("tname", data.trainName);
    localStorage.setItem("tno", data.trainNumber);
    localStorage.setItem("hr", data.departureTime.Hours);
    localStorage.setItem("min", data.departureTime.Minutes);
    localStorage.setItem("sec", data.departureTime.Seconds);
    localStorage.setItem("seatSleep", data.seatsAvailable.sleeper);
    localStorage.setItem("seatAC", data.seatsAvailable.AC);
    localStorage.setItem("priceSleep", data.price.sleeper);
    localStorage.setItem("priceAC", data.price.AC);
    localStorage.setItem("delay", data.delayedBy);
  };
  const [APIData, setAPIData] = useState([]);
  // const ACCESS_TOKEN =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODg1MzcwMjYsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiNGM3MGMzMDQtOTc1MS00OTdjLThmNzctNDRkODQ1MjYyZDQzIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjI1In0.rCVem0JWPxE5i3Q7BNU36TNGBjZZrylzuI_LXsPL2wI"; // Replace with your authentication token

  useEffect(() => {
    axios
      .get("http://localhost:3001/trains")
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="bg-gray-200 flex flex-col items-center justify-center min-h-screen w-full">
        <h1 className="text-3xl">Train Data</h1>
        <table className="bg-gray-400 w-full p-2">
          <thead className="bg-gray-800 text-white text-center">
            <tr className="text-center">
              <th>Train Name</th>
              <th>Train Number</th>
              <th>Departure Time</th>
              <th>Seats in Sleeper</th>
              <th>Seats in AC</th>
              <th>Price in Sleeper</th>
              <th>Price in AC</th>
              <th>Delayed By</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {APIData.map((data, i) => {
              return (
                <>
                  <tr className="border-b">
                    <td>{data.trainName}</td>
                    <td>{data.trainNumber}</td>
                    <td>
                      {data.departureTime.Hours}:{data.departureTime.Minutes}:
                      {data.departureTime.Seconds}
                    </td>
                    <td>{data.seatsAvailable.sleeper}</td>
                    <td>{data.seatsAvailable.AC}</td>
                    <td>{data.price.sleeper}</td>
                    <td>{data.price.AC}</td>
                    <td>{data.delayedBy}</td>
                    <Link
                      to={`/view/${data.trainName}`}
                      className="bg-blue-300 text-xs p-1 rounded-md"
                      onClick={() => setData(data)}
                    >
                      View specs
                    </Link>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Read;
