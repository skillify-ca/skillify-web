import React, { useEffect, useState } from "react"
import { fetchProfilePicture } from "../../../pages/api/studentPortal/profile/profilePicturesClient"
import { Message } from "./MessageFeed"

type MessageCardProps = {
    message: Message
}

export default function MessageCard({message}: MessageCardProps) {
    const [imageUrl, setImageUrl] = useState("")
    
    // Fetch profile pic for user on load
    useEffect(() => {
        fetchProfilePicture(message.userId).then(result => setImageUrl(result ?? ""))
    }, [])

    return <div
    key={message.message}
    className="p-2 mb-4 border-2 rounded bg-backgroundSecondary"
  >
    <p>{message.message}</p>
    <p>
      {new Date (message.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })}
    </p>
    <p>{message.userName}</p>

    <img src={imageUrl} className="w-8 h-8 rounded-full" />
  </div>
}