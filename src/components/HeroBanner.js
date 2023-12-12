function HeroBanner() {
  return (
    <div className="flex place-items-center justify-center border border-red-500 h-full">
      <div className="">
        <h1 className="font-abc text-5xl font-bold text-pink-700">
          Body, Working & Fitness
        </h1>
        <p className="font-text text-3xl text-purple-700">
          Xplore, Smile
          <br />
          and Exercise.
        </p>
        <p className="font-content text-2xl font-bold">
          Checkout the most effective exercises.
        </p>
        <button type="button" className="font-content text-xl">
          Explore Exercises
        </button>
        <p className="font-content text-9xl">
          Exercises
        </p>
      </div>
    </div>
  );
}

export default HeroBanner;
