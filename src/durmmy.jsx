<div className="bg-black text-white min-h-screen">
  {/* Hero Section */}
  <section
    className="relative h-[500px] bg-cover bg-center"
    style={{
      backgroundImage: "url('https://via.placeholder.com/1200x500')",
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-6">
      <h2 className="text-4xl font-bold">Trending Movie</h2>
      <p className="mt-2 max-w-md">
        This is an exciting movie that you will love to watch. Explore the
        adventure and thrill!
      </p>
      <div className="mt-4 flex gap-4">
        <button className="bg-white text-black px-6 py-2 flex items-center gap-2 font-bold rounded">
          <FaPlay /> Play
        </button>
        <button className="bg-gray-600 text-white px-6 py-2 flex items-center gap-2 font-bold rounded">
          <FaInfoCircle /> More Info
        </button>
      </div>
    </div>
  </section>

  {/* Movie List Section */}
  <section className="p-6">
    <h3 className="text-2xl font-bold mb-4">Popular Movies</h3>
    <div className="flex overflow-x-scroll gap-4 scrollbar-hide">
      {movies.map((movie, index) => (
        <div key={index} className="w-40 flex-shrink-0">
          <img
            src={movie.image}
            alt={movie.title}
            className="rounded-lg shadow-lg"
          />
          <p className="mt-2 text-sm font-semibold text-center">
            {movie.title}
          </p>
        </div>
      ))}
    </div>
  </section>
</div>;
