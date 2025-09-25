export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top 40% - Video section */}
      <div className="h-[40vh] bg-black flex items-center justify-center overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/tellora-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Bottom 60% - White card with top corners rounded */}
      <div className="h-[60vh] bg-white rounded-t-3xl -mt-6 relative z-10 shadow-lg flex flex-col items-center justify-center p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Tellora</h2>
        <p className="text-gray-600 text-center max-w-md">
          Your journey to amazing experiences starts here. Discover what makes Tellora special.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  )
}
