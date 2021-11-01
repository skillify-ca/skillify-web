export const measureTime = (timeStart: number, timeEnd: number) => {
  var secondsString = "";
  var minutes = Math.floor((timeEnd - timeStart) / 60000);
  var seconds = Math.floor(((timeEnd - timeStart) % 60000) / 1000);
  if (seconds == 60) {
    minutes = minutes + 1;
    secondsString = "00";
  }
  if (seconds < 10) {
    secondsString = "0" + seconds;
  } else {
    secondsString = seconds.toString();
  }
  //setTotalTimeMin(minutes);
  //setTotalTimeSec(secondsString);

  return { minutes, secondsString };
};
