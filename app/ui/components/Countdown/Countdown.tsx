"use client";

import CountdownContainer from "@/app/ui/components/Countdown/CountdownContainer";
import { useEffect, useState } from "react";

export interface CountdownProps {
  date: string;
  className?: string;
}

const Countdown: React.FC<CountdownProps> = ({ date, className }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    total: 0,
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const getTimeRemaining = (date: string) => {
      const total = Date.parse(date) - Date.parse(new Date().toString());
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));
      setTimeRemaining({ total, days, hours, minutes });
      return total;
    };

    const runCountdown = setInterval(() => {
      let total = getTimeRemaining(date);
      if (total <= 0) {
        clearInterval(runCountdown);
      }
    }, 1000);
  }, []);

  return (
    <CountdownContainer
      days={timeRemaining.days}
      hours={timeRemaining.hours}
      minutes={timeRemaining.minutes}
      className={className}
    />
  );
};

export default Countdown;
