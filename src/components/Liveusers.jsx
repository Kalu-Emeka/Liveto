import React from "react";
const LiveUsers = ({ users }) => {
  return (
    <div className="flex justify-center space-x-8 overflow-x-auto pt-[100px] sm:pb-[10px] sm:pl-[20px] md:pl-[20px] lg:pl-0 sm:space-x-0 md:space-x-0 lg:space-x-8 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:flex">
      {users.map((user) => (
        <div key={user.id} className="relative text-center sm:text-none sm:mb-[20px] md:pb-[20px] lg:pb-0">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-12 h-12 rounded-full border-2 border-red-500 animate-pulse cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

export default LiveUsers;