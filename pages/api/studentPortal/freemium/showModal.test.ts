import { renderHook } from "@testing-library/react-hooks";
import MockDate from "mockdate";
import * as ReactRedux from 'react-redux';
import { showModal } from "./showModal";

describe("showModal freemium", () => {
    MockDate.set("2022-03-21T09:30:00.000Z");

  it("returns true if the user has not been seen in 24 hours and the user is freemium or paid", () => {
    const userProfileData = {
      lastSeen: new Date("2022-03-19T09:30:00.000Z"),
    };
    const userRole = "freemium";

    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({ userRole, userProfileData });

    const { result } = renderHook(() => showModal());

    expect(result.current).toBe(true);
  });
});

describe("showModal paid", () => {
    MockDate.set("2022-03-21T09:30:00.000Z");

  it("returns true if the user has not been seen in 24 hours and the user is freemium or paid", () => {
    const userProfileData = {
      lastSeen: new Date("2022-03-19T09:30:00.000Z"),
    };
    const userRole = "paid";

    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({ userRole, userProfileData });

    const { result } = renderHook(() => showModal());

    expect(result.current).toBe(true);
  });
});

describe("don't showModal freemium", () => {
    MockDate.set("2022-03-21T09:30:00.000Z");

  it("returns true if the user has not been seen in 24 hours and the user is freemium or paid", () => {
    const userProfileData = {
      lastSeen: new Date("2022-03-21T10:30:00.000Z"),
    };
    const userRole = "freemium";

    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({ userRole, userProfileData });

    const { result } = renderHook(() => showModal());

    expect(result.current).toBe(false);
  });
});

describe("don't showModal paid", () => {
    MockDate.set("2022-03-21T09:30:00.000Z");

  it("returns true if the user has not been seen in 24 hours and the user is freemium or paid", () => {
    const userProfileData = {
      lastSeen: new Date("2022-03-21T10:30:00.000Z"),
    };
    const userRole = "paid";

    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({ userRole, userProfileData });

    const { result } = renderHook(() => showModal());

    expect(result.current).toBe(false);
  });
});

describe("don't showModal student", () => {
    MockDate.set("2022-03-21T09:30:00.000Z");

  it("returns true if the user has not been seen in 24 hours and the user is freemium or paid", () => {
    const userProfileData = {
      lastSeen: new Date("2022-03-19T09:30:00.000Z"),
    };
    const userRole = "student";

    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({ userRole, userProfileData });

    const { result } = renderHook(() => showModal());

    expect(result.current).toBe(false);
  });
});

describe("showModal coach", () => {
    MockDate.set("2022-03-21T09:30:00.000Z");

  it("returns true if the user has not been seen in 24 hours and the user is freemium or paid", () => {
    const userProfileData = {
      lastSeen: new Date("2022-03-19T09:30:00.000Z"),
    };
    const userRole = "coach";

    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({ userRole, userProfileData });

    const { result } = renderHook(() => showModal());

    expect(result.current).toBe(false);
  });
});

