import React, { useCallback, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Button } from "../ui/Button";

export interface CoopStoryComponentProps {
  goToIntro: () => void;
}
const CoopStoryComponent = ({ goToIntro }: CoopStoryComponentProps) => {
  const onFlip = useCallback((e) => {
    console.log("Current page: " + e.data);
  }, []);
  return (
    <div className="flex justify-center">
      <HTMLFlipBook
        // size={"fixed"}
        // drawShadow={false}
        // usePortrait={false}
        // useMouseEvents={false}
        // flippingTime={2}
        // autoSize={false}
        // startZIndex={0}
        // mobileScrollSupport={true}
        // maxShadowOpacity={4}
        // swipeDistance={2}
        // disableFlipByClick={true}
        // showPageCorners={true}
        // clickEventForward={false}
        onFlip={onFlip}
        width={500}
        height={600}
        showCover={true}
        startPage={1}
        // minHeight={600}
        // maxHeight={600}
        // minWidth={500}
        // maxWidth={500}
        className={null}
        style={null}
      >
        <div className="heropattern-skulls-green-400 bg-gray-900">
          <div className="border-l-8 border-black  text-white font-bold text-8xl text-center items-center  flex min-h-full prx-2">
            {" "}
            Franklin's Lab Disaster{" "}
          </div>
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
          <div className="flex flex-row">
            <img src="/images/greenPotion.png" height="150px" width="150px" />
            <img src="/images/purplePotion.png" height="150px" width="200px" />
            <img src="/images/orangePotion.png" height="150px" width="150px" />
          </div>
          <div className="text-center mt-5 text-xl"> I </div>
        </div>
        <div className="bg-gradient-to-r from-yellow-600  to-yellow-200 border-2 border-black border-r-8">
          <div className="bg-yellow-100 m-5 mt-10 rounded pl-2">
            {" "}
            Franklin believed that he could use Franksteinium to save the world
            from evil. He believed if he drank this potion he could be the hero
            of the century. But one thing Franklin missed on his calulation was
            that the potion was radioactive.{" "}
          </div>
          <div className="flex justify-center">
            <img src="/images/radioActive.png" height="100px" width="150px" />
          </div>
          <div className="text-center mt-8 text-xl"> II </div>
        </div>
        <div className="bg-gradient-to-l from-yellow-600 to-yellow-200 border-r-4 border-2 border-black border-l-8">
          <div className="bg-yellow-100 m-5 rounded pl-2">
            {" "}
            Unknowingly, Franklin still drank the potion and the side effects
            were unexpected. His skin turned green, his head became enormous,
            and worst of all, he lost his ability to think logically. He became
            a monster! This monster started stealing candy from kids. Door by
            door, with fear in the families eyes. Franklin has now became
            Frankinstein.{" "}
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
            Math Champs. You can't do it by yourself so you take a partner or
            team to stop this monster for good. Gather what you need because
            it's not gonna be easy. Stand side by side and we can all stop
            Franekstein for good. We have found him in the forest. Click play to
            fight!
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
                label="Play Game"
                onClick={goToIntro}
                backgroundColor="green"
                textColor="white"
              ></Button>
            </div>
          </div>
        </div>
      </HTMLFlipBook>
    </div>
  );
};
export default CoopStoryComponent;
