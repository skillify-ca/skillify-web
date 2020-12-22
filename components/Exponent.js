import React, { useState } from "react";

export default function Exponent(props) {
    /**
     * increment / decrement power button
     * combine one exponent into two exponents
     * break two exponents into one
     */
    return (
        <div class="divide-y container mx-auto bg-red-500">
            x^{props.power}
        </div>
    )
}