// import HeroImage from '../assets/images/banner.png';

function HeroBanner() {
  return (
    <div className="flex justify-center border border-red-500 h-full">
      <div>
        <h1>
          Body & Fitness
        </h1>
        <p>
          Dream, Smile
          <br />
          and Exercise.
        </p>
        <p>
          Checkout the most effective exercises.
        </p>
        <button type="button">
          Explore Exercises
        </button>
        <p>
          Exercises
        </p>
      </div>
      {/* <img src={HeroImage} alt="banner" className="w-1/3 h-auto" /> */}
      {/* <div>
      </div> */}
    </div>
  );
}

export default HeroBanner;
