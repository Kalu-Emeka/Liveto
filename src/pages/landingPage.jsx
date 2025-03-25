import Navbar from '../components/nav.jsx';
import LiveVideo from '../components/Livevideo.jsx';
import LiveUsers from '../components/Liveusers.jsx';
import { useState } from 'react';
const streams = [
    {
      id: 1,
      user: "Mary Adams",
      views: "3.4k",
      url: "https://www.tiktok.com/@football_new724/video/7476993163970743574", // Example video
    },
    {
      id: 2,
      user: "John Adams",
      views: "1.5k",
      url: "https://www.tiktok.com/@afrobysara/video/7466064737051282706", // Example video
    },
    {
      id: 3,
      user: "Joy Daniels",
      views: "1k",
      url: "https://www.tiktok.com/@bra.zack/video/7476936696660053270", // Example video
    },
    {
      id: 4,
      user: "Sandra Clinton",
      views: "2.5k",
      url: "https://www.tiktok.com/@zachchoicook6/video/7477542845943975190", // Example video
    },
    {
      id: 5,
      user: "Adams Junior",
      views: "6k",
      url: "https://www.tiktok.com/@busezeynep/video/7459030596946316552", // Example video
    }
  ];
  
  const users = [
    { id: 1, name: "Mary Adams", avatar: "/Images/Ellipse 1.png" },
    { id: 2, name: "John Adams", avatar: "/Images/Ellipse 2.png" },
    { id: 3, name: "Joy Daniels", avatar: "/Images/Ellipse 3.png" },
    { id: 4, name: "Sandra Clinton", avatar: "/Images/Ellipse 5.png" },
    { id: 5, name: "Adams Junior", avatar: "/Images/Ellipse 6.png" }
  ]; 
  const defaultVideos = [
    { id: 6, user: "Adam", views: "2k", url: "https://www.tiktok.com/@amosthakid/video/7470581854752509206" },
    { id: 7, user: "Mary", views: "3.1k", url: "https://www.tiktok.com/@jimbo.h/video/7477266026628074774" },
    { id: 8, user: "Jonah", views: "5k", url: "https://www.tiktok.com/@thzackchoifan/video/7466229634330381598" }
];   
function LandingPage () {
  const [selectedUser, setSelectedUser] = useState(null);
  const selectedStream = streams.find(stream => stream.user === selectedUser);
    return (
        <>
            <Navbar/>
            <LiveUsers users={users} onSelectUser={setSelectedUser}/>
            <div className="flex justify-center flex-col items-center mt-6">
                {selectedStream ? (
                    <LiveVideo key={selectedStream.id} stream={selectedStream} />
                ) : (
                  defaultVideos.map((video) => <LiveVideo key={video.id} stream={video} />)
                )}
            </div>
        </>
    )
}
export default LandingPage