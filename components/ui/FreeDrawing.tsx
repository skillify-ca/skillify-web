import React from "react";
import { Stage, Layer, Line, Text } from "react-konva";
import useWindowSize from "../../hooks/UseWindowSizeHook";
import { Button } from "./Button";

interface FreeDrawingProps {
  lines: LineData[];
  setLines: (lines: LineData[]) => void;
  historyStep: number;
  setHistoryStep: (step: number) => void;
  saveImage: (image: string) => void;
}

export type LineData = {
  tool: string;
  points: number[];
};

const FreeDrawing = ({
  lines,
  setLines,
  historyStep,
  setHistoryStep,
  saveImage
}: FreeDrawingProps) => {
  const stageRef = React.useRef(null);

  const [tool, setTool] = React.useState("black");
  const isDrawing = React.useRef(false);
  const { width, height } = useWindowSize();
  const handleUndo = () => {
    console.log("UNDO");

    if (historyStep === 0) {
      return;
    }
    setHistoryStep(historyStep - 1);
  };

  const handleRedo = () => {
    console.log("REDO");
    if (historyStep === lines.length) {
      return;
    }
    setHistoryStep(historyStep + 1);
  };

  const handleMouseDown = (e) => {
    console.log("Mouse Down");
    isDrawing.current = true;

    const isLatestStep = historyStep === lines.length;

    let newLines = [...lines];
    if (!isLatestStep) {
      //  clear all lines in the future
      newLines = lines.slice(0, historyStep);
    }

    console.log("Mouse Down 2", historyStep);

    setHistoryStep(historyStep + 1);
    console.log("Mouse Down 3", historyStep);

    const pos = e.target.getStage().getPointerPosition();
    setLines([...newLines, { tool, points: [pos.x, pos.y] }]);
    console.log("Mouse Down 4");
  };

  const handleMouseMove = (e) => {
    console.log("Mouse Move");
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
    saveImage(stageRef.current.toDataURL());
  };

  return (
    <div className="bg-white w-full">
      <div className="flex gap-4 p-4">
        <Button label="Undo" onClick={handleUndo} backgroundColor="white" />
        <Button label="Redo" onClick={handleRedo} backgroundColor="white" />
      </div>
      <Stage
        style={{ touchAction: "none" }}
        ref={stageRef}
        width={width}
        height={height}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
      >
        <Layer>
          <Text
            text="Evaluate without the use of a calculate. Show all your work."
            x={5}
            y={30}
          />
          {lines
            .filter((_, index) => index + 1 <= historyStep)
            .map((line, i) => (
              <Line
                key={i}
                points={line.points}
                stroke={tool === "black" ? "#000" : "#264bdf"}
                strokeWidth={5}
                tension={0.5}
                lineCap="round"
                globalCompositeOperation={"source-over"}
              />
            ))}
        </Layer>
      </Stage>
      <select
        value={tool}
        onChange={(e) => {
          setTool(e.target.value);
        }}
      >
        <option value="black">Black</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};
export default FreeDrawing;
