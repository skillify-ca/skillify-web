import Link from "next/link";
import React, { useState } from "react";
import Modal from "react-modal";
import StarRating from "./Rating";

export type SkillCardProps = {
  title: string;
  image?: string;
  disabled?: boolean;
  link: string;
  rating: number;
};
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "16px",
    borderRadius: "16px",
  },
};
const SkillCard = ({
  title,
  image,
  disabled,
  link,
  rating,
}: SkillCardProps) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [level, setLevel] = React.useState("1");
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  function onLevelSelect(e) {
    setLevel(e.target.value);
  }
  console.log(rating);

  return (
    <div>
      <div
        className={`gap-0 flex flex-col items-center justify-between h-full ${
          disabled ? "bg-gray-400" : "bg-gradient-to-b from-purple-400 via-purple-500 to-purple-500"
        } p-4 text-center shadow rounded-xl`}
        onClick={openModal}
      >
        <p>{title}</p>
        <div className="w-16 h-16 m-4">
          {disabled ? (
            <img src="/images/skills/lock.png" alt="" />
          ) : (
            image && <img src={image} alt="" />
          )}
        </div>
        <StarRating rating={rating} width={8} />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <button onClick={closeModal}>X</button>
        <div className="p-4 flex flex-col items-center">
          <p className="mb-4">{title}</p>

          <select
            className="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            name="level"
            value={level}
            onChange={onLevelSelect}
          >
            <option value="">Select Level</option>
            <option value="1">Easy</option>
            <option value="2">Medium</option>
            <option value="3">Hard</option>
          </select>

          <div className="flex">
            <Link href={link + "?level=" + level}>
              <button className="bg-blue-400 p-2 w-16 m-4 ring-4 ring-blue-200 rounded-xl">
                Play
              </button>
            </Link>
            <button className="bg-green-400 p-2 w-16 m-4 ring-4 ring-green-200 rounded-xl">
              Study
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SkillCard;
