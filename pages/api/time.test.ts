import "@testing-library/jest-dom/extend-expect";
import { measureTime } from "./time";

test("Test 1 minute 60 second conversion", async () => {
  //Arrange
  //start time is Tuesday October 26th at 1:09 PM
  let startTime = 1635268114367;
  let endTime = startTime + 120000;
  //Act
  var value = measureTime(startTime, endTime);
  //Assert
  expect(value.minutes).toBe(2);
  expect(value.secondsString).toBe("00");
});

test("Test Time conversion", async () => {
  //Arrange
  let startTime = 1635268114367;
  let endTime = startTime + 100000;
  //Act
  var value = measureTime(startTime, endTime);
  //Assert
  expect(value.minutes).toBe(1);
  expect(value.secondsString).toBe("40");
});
