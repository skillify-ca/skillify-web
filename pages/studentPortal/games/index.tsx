import React from "react";

export default function GamesPage() {
    return <div className="p-4 h-[600px]">
        <h1 className="text-2xl font-bold mb-4">Tag Game</h1>
        <iframe className="w-full h-full" src="/games/tag/index.html" />
    </div>
}