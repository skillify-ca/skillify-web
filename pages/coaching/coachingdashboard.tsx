import React from "react";
import ProfileDetailCard from "../../components/coding/studentPortal/ProfileDetailCard";

const coachingdashboard = () => {
  const profileData = [
    {
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      name: "Yvonne Yukon",
      joinDate: "2020-12-12",
      badges: "20/35",
      currentFocus: "creating webpages with html and css",
      nextGoal: "learning javascript syntax",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      name: "Jessica Yale",
      joinDate: "2021-11-7",
      badges: "2/35",
      currentFocus: "using React to build web applications",
      nextGoal: "learning Redux",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      name: "Mark Duckerberg",
      joinDate: "2019-4-12",
      badges: "33/35",
      currentFocus: "creating webpages with html and css",
      nextGoal: "unit testing",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      name: "Miler Perour",
      joinDate: "2022-1-1",
      badges: "35/35",
      currentFocus: "creating webpages with html and css",
      nextGoal: "learning javascript syntax",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      name: "Yvonne Yukon V2",
      joinDate: "1972-12-12",
      badges: "20/35",
      currentFocus: "creating webpages with html and css",
      nextGoal: "learning javascript syntax",
    },
  ];
  return (
    <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll">
      <div>
        <div className="mb-8 text-3xl">Coaching Dashboard</div>
        <h2 className="mb-4">Enrolled Students</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {profileData.map((it) => (
            <div className="rounded-md">
              <ProfileDetailCard
                avatar={it.avatar}
                name={it.name}
                joinDate={it.joinDate}
                badges={it.badges}
                currentFocus={it.currentFocus}
                nextGoal={it.nextGoal}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default coachingdashboard;
