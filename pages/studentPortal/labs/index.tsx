import Link from "next/link";
import React from "react";
import PageHeader from "../../../components/coding/PageHeader";
import Card from "../../../components/ui/Card";

export default function ClassroomPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 space-y-4 text-murkrow">
      <PageHeader
        title={"Welcome to Skillify Labs!"}
        description={
          "These labs are in-development micro-courses that community members can contribute to in order to improve their software development skills. Lab contributions are restricted to community members who have completed the web development course."
        }
      />
      <Link href={"/studentPortal/labs/math1"}>
        <div className="transition transform cursor-pointer hover:scale-110">
          <Card size={"small"}>
            <div className="flex flex-col items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>Math I</p>
            </div>
          </Card>
        </div>
      </Link>
      <Link href={"/studentPortal/labs/math2"}>
        <div className="transition transform cursor-pointer hover:scale-110">
          <Card size={"small"}>
            <div className="flex flex-col items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.649 3.084A1 1 0 015.163 4.4 13.95 13.95 0 004 10c0 1.993.416 3.886 1.164 5.6a1 1 0 01-1.832.8A15.95 15.95 0 012 10c0-2.274.475-4.44 1.332-6.4a1 1 0 011.317-.516zM12.96 7a3 3 0 00-2.342 1.126l-.328.41-.111-.279A2 2 0 008.323 7H8a1 1 0 000 2h.323l.532 1.33-1.035 1.295a1 1 0 01-.781.375H7a1 1 0 100 2h.039a3 3 0 002.342-1.126l.328-.41.111.279A2 2 0 0011.677 14H12a1 1 0 100-2h-.323l-.532-1.33 1.035-1.295A1 1 0 0112.961 9H13a1 1 0 100-2h-.039zm1.874-2.6a1 1 0 011.833-.8A15.95 15.95 0 0118 10c0 2.274-.475 4.44-1.332 6.4a1 1 0 11-1.832-.8A13.949 13.949 0 0016 10c0-1.993-.416-3.886-1.165-5.6z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>Math II</p>
            </div>
          </Card>
        </div>
      </Link>
      <Link href={"/studentPortal/labs/finance"}>
        <div className="transition transform cursor-pointer hover:scale-110">
          <Card size={"small"}>
            <div className="flex flex-col items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>Finance</p>
            </div>
          </Card>
        </div>
      </Link>
    </div>
  );
}
