import HeroImage from '../assets/images/banner.png';

function HeroBanner() {
  return (
    <div className="flex">
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
      <div>
        <img src={HeroImage} alt="banner" />
      </div>
    </div>
  );
}

export default HeroBanner;
