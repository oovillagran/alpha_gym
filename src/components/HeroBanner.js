import HeroImage from '../assets/images/banner.png';

function HeroBanner() {
  return (
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
      <img src={HeroImage} alt="banner" />
    </div>
  );
}

export default HeroBanner;
