import MockDate from "mockdate";
import { TOTAL_TRIAL_DAYS, calculateRemainingTrialDays, elapsedDays } from "./helpers";

test("Test elapsedDays function - within trial period", async () => {
  //set Mock date using MockDate package
  MockDate.set("2023-03-06");

    const createdAt = new Date("2023-02-22")
    const daysRemaining = 12

  // Act
  const result = elapsedDays(createdAt);

  // Assert
  expect(result).toBe(daysRemaining);
});

test("Test elapsedDays function - expired", async () => {
    //set Mock date using MockDate package
    MockDate.set("2023-03-06");
  
      const createdAt = new Date("2023-01-22")
  
    // Act
    const result = elapsedDays(createdAt);
  
    // Assert
    expect(result).toBe(TOTAL_TRIAL_DAYS);
  });

  test("Test elapsedDays function - createdAt date is after system date", async () => {
    //this use case is in case the database accidentially gets changed -- I think it should in this case go to 0 so we know there's an error.
    //set Mock date using MockDate package
    MockDate.set("2023-03-06");
  
      const createdAt = new Date("2024-01-22")
  
    // Act
    const result = elapsedDays(createdAt);
  
    // Assert
    expect(result).toBe(0);
  });

test("Test calcualteRemainingTrialDays function - within trial period", async () => {
  //set Mock date using MockDate package
  MockDate.set("2023-03-06");

    const createdAt = new Date("2023-02-22")
    const daysRemaining = 9

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
