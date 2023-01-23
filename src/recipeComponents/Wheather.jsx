
import React, { useEffect, useState } from "react";

function Wheather() {
   const [curTime, setcurTime] = useState();
   const [curWheather, setcurWheather] = useState();
   const [curDate, setcurDate] = useState()
   function ClockRefresh() {
      setcurTime(new Date().toLocaleTimeString("en-US", {
         hour: "2-digit",
         minute: "2-digit",
         hour12: false
      }
      ))
   }
   function getLocation() {
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(showPosition);
      }
      else {
         setcurWheather("Geolocation is not supported by this browser.")
      }
   }
   function showPosition(position) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=b59e476dfdfb802022387977c6b4ceb1&units=metric`)
         .then(response => {
            return (response.json());
         }).then(data => {
            const { temp } = data.main;
            setcurWheather(temp)
            // console.log(temp)????????????? why two times??
         })
   }
  
   useEffect(() => {
      let timeFunc = setInterval(ClockRefresh, 1000)
      setcurDate(new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
      )
      getLocation()
      return () => {clearInterval(timeFunc)}
   }, [curDate])
   return (<>
      <h1>Wheather</h1>
      <div className="WheatherContainer">
         <div id="curDate">{curDate}</div>
         <div id="curTime">{curTime}</div>
         <div id="curWheather">{curWheather}</div>
      </div>
   </>
   )
}
export default Wheather;