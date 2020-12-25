import React, { useState } from "react";
import Link from "next/link";

export default function Outline(props) {
  /**
   * increment / decrement power button
   * combine one exponent into two exponents
   * break two exponents into one
   */
  return (
    <div className="grid grid-cols-2 gap-4">
      <Link href="/strand/number-sense-and-algebra">
        <div className="gap-0 divide-y-2">
          <div className="p-16 bg-red-500">Number Sense and Algebra</div>
          <div className="p-4 bg-red-500">50%</div>
        </div>
      </Link>
      <Link href="/strand/linear-relations">
        <div className="gap-0 divide-y-2">
          <div className="p-16 bg-green-500">Linear Relations</div>
          <div className="p-4 bg-green-500">33%</div>
        </div>
      </Link>
      <Link href="/strand/analytic-geometry">
        <div className="gap-0 divide-y-2">
          <div className="p-16 bg-blue-500">Analytic Geometry</div>
          <div className="p-4 bg-blue-500">100%</div>
        </div>
      </Link>
      <Link href="/strand/measurement-geometry">
        <div className="gap-0 divide-y-2">
          <div className="p-16 bg-yellow-500">Measurement and Geometry</div>
          <div className="p-4 bg-yellow-500">0%</div>
        </div>
      </Link>
    </div>
  );
}
