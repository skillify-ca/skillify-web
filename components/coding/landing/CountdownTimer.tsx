import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const countDownDate = new Date("Dec 30, 2022 00:00:00").getTime();
      const timeleft = countDownDate - now;
      if (timeleft > 0) {
        setDays(Math.floor(timeleft / (1000 * 60 * 60 * 24)));
        setHours(
          Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        setMinutes(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((timeleft % (1000 * 60)) / 1000));
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 md:flex-row bg-murkrow">
      <h2 className="mb-2 text-xl font-bold text-center text-white md:mb-0 md:p-4 bg-murkrow">
        This Opportunity Expires in
      </h2>
      <div>
        <TimeDisplay
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </div>
      <h2 className="hidden p-4 text-xl font-bold text-center text-white md:flex bg-murkrow">
        Spots are limited!
      </h2>
    </div>
  );
}

type TimeDisplayProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
function TimeDisplay({ days, hours, minutes, seconds }: TimeDisplayProps) {
  const dayString = days.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const hoursString = hours.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const minutesString = minutes.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const secondsString = seconds.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  return (
    <div className="grid h-full grid-cols-4">
      <TimeUnitDisplay value={dayString} unit={"Days"} />
      <TimeUnitDisplay value={hoursString} unit={"Hours"} />
      <TimeUnitDisplay value={minutesString} unit={"Minutes"} />
      <TimeUnitDisplay value={secondsString} unit={"Seconds"} />
    </div>
  );
}

type TimeUnitDisplayProps = {
  value: string;
  unit: string;
};
function TimeUnitDisplay({ value, unit }: TimeUnitDisplayProps) {
  return (
    <div className="flex flex-col items-center mx-2">
      <h3 className="text-2xl font-bold text-white ">{value}</h3>
      <h3 className="text-sm font-bold text-white">{unit}</h3>
    </div>
  );
}
