import React from "react";
// import { useParams } from "react-router-dom";
function ViewTrain() {
//   const { tname } = useParams();
  return (
    <>
      <div className="flex flex-col gap-3 text-xl font-semibold justify-center p-20 rounded-md bg-blue-400 text-white">
        <div className="flex flex-col gap-2">
          Name: {localStorage.getItem("tname")}
        </div>
        <div className="flex flex-col gap-2">
          Train No: {localStorage.getItem("tno")}
        </div>
        <div className="flex flex-col gap-2">
          Hour: {localStorage.getItem("hr")}
        </div>
        <div className="flex flex-col gap-2">
          Minute: {localStorage.getItem("min")}
        </div>
        <div className="flex flex-col gap-2">
          Second: {localStorage.getItem("sec")}
        </div>
        <div className="flex flex-col gap-2">
          Seat Available for Sleeper{localStorage.getItem("seatSleep")}
        </div>
        <div className="flex flex-col gap-2">
          Seat Available for AC{localStorage.getItem("seatAC")}
        </div>
        <div className="flex flex-col gap-2">
          Price for Sleeper
          {localStorage.getItem("priceSleep")}
        </div>
        <div className="flex flex-col gap-2">
          Price for AC
          {localStorage.getItem("priceAC")}
        </div>
        <div className="flex flex-col gap-2">
            Delayed By
          {localStorage.getItem("delay")}
        </div>
      </div>
    </>
  );
}

export default ViewTrain;
