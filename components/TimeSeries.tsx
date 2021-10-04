import { DataTexture3DProps } from "@react-three/fiber";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import * as d3 from "d3";
import { useRef } from "react";
import { useEffect } from "react";
import { ItemTypes } from "./ticTacToe/ItemTypes";
import { attempt } from "lodash";

const TimeSeries = () => {
  const dataRef = useRef(null);

  // sample data

  const data = [
    { date: "01/01/2021", attempt: 1, score: 100 },
    { date: "01/02/2021", attempt: 2, score: 100 },
    { date: "01/03/2021", attempt: 3, score: 99 },
    { date: "01/04/2021", attempt: 4, score: 80 },
    { date: "01/05/2021", attempt: 5, score: 70 },
    { date: "01/06/2021", attempt: 6, score: 40 },
    { date: "01/07/2021", attempt: 7, score: 10 },
  ];

  const data3 = [200, 400, 200, 600, 800];
  const printData = data[0].attempt;

  const stringData = data.reduce((result, item) => {
    return `${result}${item.score},${item.attempt}|`;
  }, "");

  // load data into array on page load
  useEffect(() => {
    const scores: number[] = data.map((item) => item.score);
    const dates: string[] = data.map((item) => item.date);
    const attempt: number[] = data.map((item) => item.attempt);
    DrawTimeSeries(data);
  }, []);

  const margin = { top: 50, right: 80, bottom: 60, left: 50 },
    width = 300, //- margin.left - margin.right,
    height = 100, //- margin.top - margin.bottom,
    color = "pink";

  const xMinValue = d3.min(data, (d) => d.attempt),
    xMaxValue = d3.max(data, (d) => d.attempt);

  const yMinValue = d3.min(data, (d) => d.score),
    yMaxValue = d3.max(data, (d) => d.score);

  const getX = d3
    .scaleLinear()
    .domain([xMinValue - 1, xMaxValue + 1])
    .range([0, width]);

  const getY = d3
    .scaleLinear()
    .domain([yMinValue - 1, yMaxValue + 10])
    .range([height, 0]);

  const getXAxis = (ref) => {
    const xAxis = d3.axisBottom(getX);
    d3.select(ref).call(xAxis);
  };

  const getYAxis = (ref) => {
    const yAxis = d3.axisLeft(getY);
    d3.select(ref).call(yAxis);
  };

  const linePath = d3
    .line()
    .x((d) => getX(d.attempt))
    .y((d) => getY(d.score))
    .curve(d3.curveMonotoneX)(data);

  const areaPath = d3
    .area()
    .x((d) => getX(d.attempt))
    .y0((d) => getY(d.score))
    .y1(() => getY(yMinValue))
    .curve(d3.curveMonotoneX)(data);

  // define d3 graph

  const DrawTimeSeries = (data: {}[]) => {};
  return (
    <div>
      <h1 className="text-4xl pb-8">Johnny is failing skool :( </h1>
      <div className="wrapper">
        <svg
          viewBox={`0 0 ${width + margin.left + margin.right} 
                            ${height + margin.top + margin.bottom}`}
        >
          // x- and y-axes
          <g className="axis" ref={getYAxis} />
          <g
            className="axis xAxis"
            ref={getXAxis}
            transform={`translate(0,${height})`}
          />
          // area and line paths
          <path fill={color} d={areaPath} opacity={0.5} />
          <path strokeWidth={0.5} fill="none" stroke="black" d={linePath} />
          {data.map((item, index) => {
            return (
              <g key={index}>
                // hovering text // hovering circle
                <circle
                  cx={getX(item.attempt)}
                  cy={getY(item.score)}
                  r="1.5"
                  fill={color}
                  strokeWidth=".5"
                  stroke="black"
                  style={{ transition: "ease-out .1s" }}
                />
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );

  //return <div ref={dataRef}>{stringData}</div>;
};

export default TimeSeries;
