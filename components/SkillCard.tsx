import Link from "next/link";
import React, { useState } from "react";
import Modal from "react-modal";
import StarRating from "./Rating";

export type SkillCardProps = {
  title: string;
  image?: string;
  disabled?: boolean;
  link?: string;
  rating?: number;
};
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "10%",
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
    if (!disabled) {
      setIsOpen(true);
    }
  }

  function closeModal() {
    setIsOpen(false);
  }
  function onLevelSelect(e) {
    setLevel(e.target.value);
  }

  return (
    <div className="w-72">
      <div
        className={`gap-0 flex justify-between rounded-full items-center h-16 w-72 ${
          disabled ? "bg-gray-400" : "bg-white"
        } p-4 text-center shadow-md rounded-xl`}
        onClick={openModal}
      >
        <div className="w-8 h-8 bg-purple-100 rounded-full p-1 ring-2 ring-blue-300">
          {disabled ? (
            <img src="/images/skills/lock.png" alt="" />
          ) : (
            image && <img src={image} alt="" />
          )}
        </div>
        <p className="mx-4">{title}</p>
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
            {rating > 0 && <option value="2">Medium</option>}
            {rating > 1 && <option value="3">Hard</option>}
          </select>

          <div className="flex">
            <Link href={link + "?level=" + level}>
              <button className="bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500 p-2 w-16 m-4 border-b-4 border-blue-900 rounded-xl hover:from-blue-200 active:border-b-2">
                Quiz
              </button>
            </Link>
            <button className="bg-gradient-to-b from-pink-300 via-pink-400 to-pink-500 p-2 w-20 m-4 border-b-4 border-pink-900 rounded-xl hover:from-pink-200 active:border-b-2">
              Practice
            </button>
            <button className="bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 p-2 w-20 m-4 border-b-4 border-yellow-900 rounded-xl hover:from-yellow-200 active:border-b-2">
              Explore
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SkillCard;
