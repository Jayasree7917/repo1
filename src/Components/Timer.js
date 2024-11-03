import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import './Timer.css';

const getTimeLeft = (expiry) => {
  let days = "0";
  let hours = "0";
  let minutes = "0";
  let seconds = "0";

  const difference = new Date(expiry).getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days, hours, minutes, seconds };
  }

  const dys = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const mnt = Math.floor((difference / (1000 * 60)) % 60);
  const snd = Math.floor((difference / 1000) % 60);

  days = dys < 10 ? `0${dys}` : dys.toString();
  hours = hrs < 10 ? `0${hrs}` : hrs.toString();
  minutes = mnt < 10 ? `0${mnt}` : mnt.toString();
  seconds = snd < 10 ? `0${snd}` : snd.toString();

  return { days, hours, minutes, seconds };
};

const Timer = ({ launchDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(launchDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(launchDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [launchDate]);

  const calculatePercentage = (value, total) => (value / total) * 100;

  return (
    <div className="timer-container">
      <div className="time-box">
        <CircularProgressbar
          value={calculatePercentage(timeLeft.days, 30)}
          text={timeLeft.days}
          styles={buildStyles({
            pathColor: "url(#daysGradient)", 
            textColor: "white",
            trailColor: "#0c0f1d",
            textSize: "24px", 
            strokeLinecap: "round",
          })}
        />
        <svg width="0" height="0">
          <defs>
            <linearGradient id="daysGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff416c" />
              <stop offset="50%" stopColor="#ff4b2b" />
              <stop offset="100%" stopColor="#ffb347" />
            </linearGradient>
          </defs>
        </svg>
        <small className="time-label">Days</small>
      </div>
      <div className="time-box">
        <CircularProgressbar
          value={calculatePercentage(timeLeft.hours, 24)}
          text={timeLeft.hours}
          styles={buildStyles({
            pathColor: "url(#hoursGradient)",
            textColor: "white",
            trailColor: "#0c0f1d",
            textSize: "24px", 
            strokeLinecap: "round",
          })}
        />
        <svg width="0" height="0">
          <defs>
            <linearGradient id="hoursGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00c6ff" />
              <stop offset="50%" stopColor="#0072ff" />
              <stop offset="100%" stopColor="#00d4ff" />
            </linearGradient>
          </defs>
        </svg>
        <small className="time-label">Hours</small>
      </div>
      <div className="time-box">
        <CircularProgressbar
          value={calculatePercentage(timeLeft.minutes, 60)}
          text={timeLeft.minutes}
          styles={buildStyles({
            pathColor: "url(#minutesGradient)",
            textColor: "white",
            trailColor: "#0c0f1d",
            textSize: "24px",  
            strokeLinecap: "round",
          })}
        />
        <svg width="0" height="0">
          <defs>
            <linearGradient id="minutesGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff416c" />
              <stop offset="50%" stopColor="#ff4b2b" />
              <stop offset="100%" stopColor="#ffb347" />
            </linearGradient>
          </defs>
        </svg>
        <small className="time-label">Minutes</small>
      </div>
      <div className="time-box">
        <CircularProgressbar
          value={calculatePercentage(timeLeft.seconds, 60)}
          text={timeLeft.seconds}
          styles={buildStyles({
            pathColor: "url(#secondsGradient)",
            textColor: "white",
            trailColor: "#0c0f1d",
            textSize: "24px", 
            strokeLinecap: "round",
          })}
        />
        <svg width="0" height="0">
          <defs>
            <linearGradient id="secondsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00c6ff" />
              <stop offset="50%" stopColor="#0072ff" />
              <stop offset="100%" stopColor="#00d4ff" />
            </linearGradient>
          </defs>
        </svg>
        <small className="time-label">Seconds</small>
      </div>
    </div>
  );
};

export default Timer;