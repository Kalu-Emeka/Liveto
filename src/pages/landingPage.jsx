import Navbar from '../components/nav.jsx';
import LiveVideo from '../components/Livevideo.jsx';
import LiveUsers from '../components/Liveusers.jsx';
const streams = [
    {
      id: 1,
      user: "Mary Adams",
      views: "3.4k",
      url: "https://youtube.com/shorts/t0i08Gb8bSk?si=jzUYVUk8udzgl8U0", // Example video
    },
  ];
  
  const users = [
    { id: 1, avatar: "/Images/Ellipse 1.png" },
    { id: 2, avatar: "/Images/Ellipse 2.png" },
    { id: 3, avatar: "/Images/Ellipse 3.png" },
    { id: 4, avatar: "/Images/Ellipse 5.png" },
    { id: 5, avatar: "/Images/Ellipse 6.png" },
    { id: 6, avatar: "/Images/Ellipse 7.png" },
    { id: 7, avatar: "/Images/Ellipse 8.png" }
  ];    
function LandingPage () {
    return (
        <>
            <Navbar/>
            <LiveUsers users={users} />
            <div className="flex justify-center mt-6">
                {streams.map((stream) => (
                <LiveVideo key={stream.id} stream={stream} />
                ))}
            </div>
        </>
    )
}
export default LandingPage