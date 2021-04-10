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

  return (
    <div>
      <div
        className={`gap-0 flex flex-col items-center justify-between h-full ${
          disabled
            ? "bg-gray-400"
            : "bg-gradient-to-b from-purple-400 via-purple-500 to-purple-500"
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
            className="block w-52 text-gray-700 my-4 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
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
              <button className="bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500 p-2 w-16 m-4 border-b-4 border-blue-900 rounded-xl hover:from-blue-200">
                Quiz
              </button>
            </Link>
            <button className="bg-gradient-to-b from-pink-300 via-pink-400 to-pink-500 p-2 w-20 m-4 border-b-4 border-pink-900 rounded-xl hover:from-pink-200">
              Practice
            </button>
            <button className="bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 p-2 w-20 m-4 border-b-4 border-yellow-900 rounded-xl hover:from-yellow-200">
              Explore
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SkillCard;
