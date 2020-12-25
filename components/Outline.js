import React, { useState } from "react";
import Link from "next/link";

export default function Outline(props) {
  /**
   * increment / decrement power button
   * combine one exponent into two exponents
   * break two exponents into one
   */
  return (
    <div>
      <Link href="/strand/number-sense-and-algebra">
        <div className="p-4 m-4 bg-red-500">50% | Number Sense and Algebra</div>
      </Link>
      <Link href="/strand/linear-relations">
        <div className="p-4 m-4 bg-green-500">33% | Linear Relations</div>
      </Link>
      <Link href="/strand/analytic-geometry">
        <div className="p-4 m-4 bg-blue-500">100% | Analytic Geometry</div>
      </Link>
      <Link href="/strand/measurement-geometry">
        <div className="p-4 m-4 bg-yellow-500">0% | Measurement and Geometry</div>
      </Link>
    </div>
  );
}
