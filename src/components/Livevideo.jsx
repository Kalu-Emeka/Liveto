import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useWallet } from "@suiet/wallet-kit";
const LiveVideo = ({ stream }) => {
    const [votes, setVotes] = useState(0);
    const { connected } = useWallet();
    const [likes, setLikes] = useState(0);
    const wallet = useWallet();
    const handleVote = (value) => {
        if (!wallet.connected) {
          alert("Please connect your wallet to vote!");
          return;
        }
        setVotes(votes + value);
    };
    
  return (
    <div className="bg-black text-white p-4 rounded-lg relative w-[380px]">
      {/* Live Badge */}
      <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm font-bold animate-pulse">
        Live
      </div>

      {/* Video Player */}
      <ReactPlayer url={stream.url}  playing={true}  controls width="100%" />

      {/* Stream Details */}
      <div className="p-2">
        <h2 className="text-lg font-bold">{stream.user}</h2>
        <p className="text-sm text-gray-300">{stream.views} views</p>

        {/* Like/Dislike Buttons */}
        {/* Voting */}
        <button
          onClick={handleVote}
          className="bg-red-600 text-white px-5 py-2 rounded-sm mt-[20px] w-full hover:bg-red-700"
        >
            Vote ({votes})
        </button>
      </div>
      <div className="flex items-center mt-2 space-x-4">
        <button
        className="text-white bg-green-600 px-3 py-1 rounded"
        onClick={() => setLikes(likes + 1)}
        >
        👍 {likes}
        </button>
        <button
        className="text-white bg-red-600 px-3 py-1 rounded"
        onClick={() => setDislikes(likes > 0 ? likes - 1 : 0)}
        >
        👎{likes}
        </button>
    </div>
    </div>
  );
};

export default LiveVideo;