import { useEffect, useState } from "react";

const VideoPlayer = () => {
  const [video, setVideo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    fetchVideo();
  }, []);
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
