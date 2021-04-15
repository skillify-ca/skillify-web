import Link from "next/link";
import React, { useState } from "react";
import Modal from "react-modal";
import { Button } from "../stories/Button";
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
              <Button backgroundColor="blue" label="Quiz" />
            </Link>
            <Button backgroundColor="pink" label="Practice" />
            <Button backgroundColor="yellow" label="Explore" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SkillCard;
