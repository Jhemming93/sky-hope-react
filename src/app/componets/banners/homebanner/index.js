import QuoteButton from "./QuoteButton";
export default function HomeBanner() {
  return (
    <div className="relative ">
      <video
        autoPlay
        playsInline
        loop
        muted
        className="w-screen md:max-h-48 md:object-cover "
      >
        <source src="/banner_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className=" absolute text-start w-fit mx-auto top-1/4 left-0 right-0">
        <div>
          <div
            className=" p-2 rounded mb-2 pr-6"
            style={{ backgroundColor: "rgba(255,255,255,.5)" }}
          >
            <h2 className="text-gray-800 font-bold text-xl ">
              Your Aerial Solutions<br></br>Across the Lakeland
            </h2>
          </div>
          <QuoteButton />
        </div>
      </div>
    </div>
  );
}
