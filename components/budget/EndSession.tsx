import React, { ReactNode } from "react"
import { Button } from "../ui/Button"
import useWindowSize from "../../hooks/UseWindowSizeHook"
import Confetti from 'react-confetti'

export interface EndSessionProps {

    onClick: () => void
}

export const EndSession = ({

    onClick

}: EndSessionProps) => {

    const { width, height } = useWindowSize()

    return (
        <div className="pt-64 bg-white min-h-screen max-w-screen">

            <Confetti
                width={width}
                height={height}
            />

            <div className="text-center pb-5">
                <p className="text-5xl pb-5">GREAT JOB!</p>
                <p>The more money you have left over, the more you can save for your future!</p>
            </div>
            <div className="flex flex-nowrap justify-center">
                <div className="pr-5">
                    <Button
                        label="Play Again"
                        backgroundColor="green"
                        textColor="white"
                        onClick={(e) => onClick()}
                    />
                </div>
                <div>
                    <a href="/practice">
                        <Button
                            label="Go Home"
                            backgroundColor="green"
                            textColor="white"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}
