import { use } from "react";
import { useEffect, useState } from "react";
import { registerAccess } from "../utils/utils.js";

const VideoPlayer = () => {
  const [video, setVideo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [playVideo, setPlayVideo] = useState(new Set());

  const fetchVideo = async () => {
    setIsLoading(true);
    const response = await fetch(
      "http://localhost:3320/videos/random/aleatorio"
    );
    const data = await response.json();
    setVideo(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handlePlay = () => {
    if(!playVideo.has(video.id)){

    const hora_video = new Date();
    const hora_video_datetime = hora_video.toISOString().slice(0, 19).replace('T', ' ');
    registerAccess(video.url, null, hora_video_datetime);
    setPlayVideo((prev)=>new Set(prev).add(video.id));
    }
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  useEffect(() => {
    const hora_web = new Date();
    const hora_web_datetime = hora_web.toISOString().slice(0, 19).replace('T', ' ');
    registerAccess(window.location.pathname, hora_web_datetime );
  },[])
  return (
    <>
      <div className="w-[80%] bg-white p-5 rounded-3xl flex flex-col justify-between items-center gap-3 mx-auto">
        <div className="bg-slate-200 h-full w-full rounded-2xl p-2">
          {isLoading ? (
            <>
              <div className="w-full h-[400px] bg-gray-300 animate-pulse rounded-2xl"></div>
            </>
          ) : (
            <>
              <video
                className="w-full h-[400px] object-contain rounded-2xl"
                controls
                onPlay={handlePlay}
                key={video.id}
              >
                <source src={video.url} />
              </video>
              <div className="mt-3 bg-white p-2 rounded-2xl">
                <h2 className="text-2xl">{video.nombre}</h2>
                <h3 className="font-light text-slate-400">{video.tema}</h3>
              </div>
            </>
          )}
        </div>
        <div className="">
          <button
            onClick={fetchVideo}
            className=" p-3 bg-gradient-to-br from-blue-200 to-blue-600 rounded-2xl text-white"
          >
            cambiar video
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
