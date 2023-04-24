import MockDate from "mockdate";
import { TOTAL_TRIAL_DAYS, calculateRemainingTrialDays, elapsedDays } from "./helpers";

test("Test elapsedDays function - within trial period", async () => {
  //set Mock date using MockDate package
  MockDate.set("2023-03-06");

    const createdAt = new Date("2023-03-04")
  // Act
  const result = elapsedDays(createdAt);

  // Assert
  expect(result).toBe(2);
});

test("Test elapsedDays function - expired", async () => {
    //set Mock date using MockDate package
    MockDate.set("2023-01-16");
  
      const createdAt = new Date("2023-01-01")
  
    // Act
    const result = elapsedDays(createdAt);
  
    // Assert
    expect(result).toBe(TOTAL_TRIAL_DAYS);
  });

test("Test calcualteRemainingTrialDays function - within trial period", async () => {
  //set Mock date using MockDate package
  MockDate.set("2023-03-06");

    const createdAt = new Date("2023-02-22")
    const daysRemaining = 2

  // Act
  const result = calculateRemainingTrialDays(createdAt);

  // Assert
  expect(result).toBe(daysRemaining);
});

test("Test calculateRemainingTrialDays function - expired", async () => {
    //set Mock date using MockDate package
    MockDate.set("2023-03-06");
  
      const createdAt = new Date("2023-01-22")
  
    // Act
    const result = calculateRemainingTrialDays(createdAt);
  
    // Assert
    expect(result).toBe(0);
  });
