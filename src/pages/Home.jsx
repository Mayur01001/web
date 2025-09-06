const LandingVideo = () => {
  return (
    <div className="fixed top-19 left-0 w-full h-[calc(100vh)] overflow-hidden -z-10">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
        src="/video/video.mp4" // Ensure this video is in the public folder
      />
    </div>
  );
};

export default LandingVideo;
