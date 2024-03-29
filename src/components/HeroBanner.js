function HeroBanner() {
  return (
    <div className="flex place-items-center justify-center border border-red-500 h-full">
      <div className="p-10">
        <h1 className="font-abc text-3xl md:text-5xl font-bold text-pink-700">
          Body, Working & Fitness
        </h1>
        <p className="font-text text-xl md:text-3xl text-purple-700">
          Xplore, Smile
          <br />
          and Exercise.
        </p>
        <p className="font-content text-lg md:text-2xl font-bold">
          Checkout the most effective exercises.
        </p>
        <button type="button" className="font-content text-lg md:text-xl bg-red-500 hover:bg-slate-200 text-white hover:text-red-500 p-2 my-4 rounded-lg shadow-2xl border border-red-500">
          Explore Exercises
        </button>
        <p className="font-content text-6xl lg:text-9xl font-extrabold">
          Exercises
        </p>
      </div>
    </div>
  );
}

export default HeroBanner;
