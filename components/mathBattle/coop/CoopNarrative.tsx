import React, { useCallback, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Button } from "../../ui/Button";

export interface CoopStoryComponentProps {
  close: () => void;
}
const CoopStoryComponent = ({ close }: CoopStoryComponentProps) => {
  const onFlip = useCallback((e) => {
    console.log("Current page: " + e.data);
  }, []);
  return (
    <HTMLFlipBook
      size={"stretch"}
      drawShadow={true}
      usePortrait={true}
      useMouseEvents={true}
      flippingTime={800}
      autoSize={true}
      startZIndex={0}
      mobileScrollSupport={true}
      maxShadowOpacity={0.7}
      swipeDistance={null}
      disableFlipByClick={false}
      showPageCorners={true}
      clickEventForward={null}
      onFlip={onFlip}
      width={400}
      height={500}
      showCover={true}
      startPage={0}
      minHeight={500}
      minWidth={400}
      maxHeight={500}
      maxWidth={400}
      className={""}
      style={{}}
    >
      <div className="heropattern-skulls-green-400 border-l-8 border-black  bg-gray-900 flex">
        <p className="text-white font-bold text-7xl text-center justify-center items-center h-full">
          Franklin's Lab Disaster{" "}
        </p>
      </div>

      <div className="bg-gradient-to-l from-yellow-600  to-yellow-200  border-r-4 border-2 border-black border-l-8">
        <div className="bg-yellow-100 m-5 rounded text-xl font-medium">
          {" "}
          Once upon a time...{" "}
        </div>
        <div className="bg-yellow-100 m-5 rounded pl-2">
          {" "}
          A Scientist by the name of Franklin was conducting a terrifying
          experiment in science history. He created his own chemical called
          Franksteinium that was said to grant him super strength,
          mind-controllling screams, and tremedous height.{" "}
        </div>
        <div className="flex flex-row justify-center">
          <img className="w-32 h-32" src="/images/greenPotion.png" />
          <img className="w-32 h-32" src="/images/purplePotion.png" />
          <img className="w-32 h-32" src="/images/orangePotion.png" />
        </div>
        <div className="text-center mt-5 text-xl"> I </div>
      </div>
      <div className="bg-gradient-to-r from-yellow-600  to-yellow-200 border-2 border-black border-r-8">
        <div className="bg-yellow-100 m-5 mt-10 rounded pl-2">
          {" "}
          Franklin believed that he could use Franksteinium to save the world
          from evil. He believed if he drank this potion he could be the hero of
          the century. But one thing Franklin missed on his calulation was that
          the potion was radioactive.{" "}
        </div>
        <div className="flex justify-center">
          <img src="/images/radioActive.png" height="100px" width="150px" />
        </div>
        <div className="text-center mt-8 text-xl"> II </div>
      </div>
      <div className="bg-gradient-to-l from-yellow-600 to-yellow-200 border-r-4 border-2 border-black border-l-8">
        <div className="bg-yellow-100 m-5 rounded pl-2">
          {" "}
          Unknowingly, Franklin still drank the potion and the side effects were
          unexpected. His skin turned green, his head became enormous, and worst
          of all, he lost his ability to think logically. He became a monster!
          This monster started stealing candy from kids. Door by door, with fear
          in the families eyes. Franklin has now became Frankinstein.{" "}
        </div>
        <div className="flex justify-center">
          <img
            src="/images/frankenstein.jpeg"
            height="150px"
            width="200px"
            className="rounded"
          />
        </div>
        <div className="text-center mt-8 text-xl"> III </div>
      </div>
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-200  border-2 border-black border-r-8">
        <div className="bg-yellow-100 m-5 rounded pl-2">
          {" "}
          It's takes more than just kids to stop Frankenstein, it takes smart
          Math Champs. You can't do it by yourself so you take a partner or team
          to stop this monster for good. Gather what you need because it's not
          going to be easy. Stand side by side and we can all stop Franekstein for
          good. We have found him in the forest.
        </div>
        <div className="flex justify-center">
          <img
            src="/images/punching.jpeg"
            height="150px"
            width="200px"
            className="rounded"
          />
        </div>
        <div className="text-center mt-8 text-xl">
          <div className="justify-end">
            <Button
              label="Close"
              onClick={close}
              backgroundColor="blue"
              textColor="white"
            ></Button>
          </div>
        </div>
      </div>
    </HTMLFlipBook>
  );
};
export default CoopStoryComponent;
