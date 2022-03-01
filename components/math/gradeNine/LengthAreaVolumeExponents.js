import React, { useState } from "react";

export default function LengthAreaVolumeExponents() {
  return (
    <div className="divide-y container mx-auto">
      <div className="p-4">
        <p className="text-lg">
          You can use exponents to evaluate measurements in different
          dimensions. Volume is measured in 3 dimensions (length, width, and
          height). If you were measuring in centimeters, it would be: (length in
          cm) x (width in cm) x (height in cm), which is cm cubed. Area is
          measured in 2 dimensions, so the exponent is 2 (square cm). Length is
          measured in 1 dimension, and the exponent is 1, although we never
          actually write the exponent for length.
        </p>
        <br />
        <table>
          <thead>
            <tr>
              <th>Measurement</th>
              <th>Dimensions</th>
              <th>Formula</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Point</td>
              <td>0</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Length</td>
              <td>1</td>
              <td>x</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>2</td>
              <td>x^2</td>
            </tr>
            <tr>
              <td>Volume</td>
              <td>3</td>
              <td>x^3</td>
            </tr>
          </tbody>
        </table>
        <br/>
        <div className="text-xl">Formulas</div>
        <div className="grid grid-cols-2 pt-4 text-lg gap-4">
          <div>Area of a Square </div>
          <div>x^2</div>
          <div>Area of a Circle </div>
          <div>pi * r^2</div>
          <div>Surface Area of a Cube </div>
          <div>6 * x^2</div>
          <div>Surface Area of a Cylinder </div>
          <div>2 π r2 + 2 π r h </div>
          <div>Volume of a Cube</div>
          <div>x^3</div>
          <div>Volume of a Cone </div>
          <div>1/3 π^2 h</div>
          <div>Volume of a Cylinder</div>
          <div>π * r^2 * h</div>
          <div>Volume of a Sphere</div>
          <div>4/3 π r^3</div>
        </div>
      </div>
    </div>
  );
}
