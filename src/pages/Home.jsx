const LandingVideo = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen overflow-hidden -z-10">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
        src="/video.mp4" // Ensure this video is in the public folder
      />
    </div>
  );
};

export default LandingVideo;
