import React, { useState } from "react";


export default function SliderList({ items }: { items: string[] }) {

    const [sliderValues, setSliderValues] = useState([]);

    const handleChange = () => {

    }

    return <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="gap-4 flex flex-col gap-8">
            {
                items.map((item, index) => <div className="flex flex-col items-center">
                    <div>
                        <p className="font-bold">{item}</p>
                        <div className="flex gap-2">
                            <p>1</p>
                            <input
                                type="range"
                                onChange={handleChange}
                                className="w-80"
                                value={sliderValues[index]}
                            />
                            <p>10</p>

                        </div>
                    </div>
                </div>
                )
            }
        </div>
    </div>
}