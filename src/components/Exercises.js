import Back from '../assets/images/back.jpg';
import Cardio from '../assets/images/cardio.jpg';
import Chest from '../assets/images/chest.jpg';
import LowerArms from '../assets/images/lowerarms.jpg';
import LowerLegs from '../assets/images/lowerlegs.jpg';
import Neck from '../assets/images/neck.jpg';
import Shoulders from '../assets/images/shoulders.jpg';
import UpperArms from '../assets/images/upperarms.jpg';
import UpperLegs from '../assets/images/upperlegs.jpg';
import Waist from '../assets/images/waist.jpg';

function Exercises() {
  const images = [
    { id: 'back', path: Back },
    { id: 'cardio', path: Cardio },
    { id: 'chest', path: Chest },
    { id: 'lowerarms', path: LowerArms },
    { id: 'lowerlegs', path: LowerLegs },
    { id: 'neck', path: Neck },
    { id: 'shoulders', path: Shoulders },
    { id: 'upperarms', path: UpperArms },
    { id: 'upperlegs', path: UpperLegs },
    { id: 'waist', path: Waist },
  ];

  return (
    <>
      <div>Exercises</div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="bg-cover bg-center h-40 sm:h-64"
            style={{ backgroundImage: `url(${image.path})` }}
          >
            Ex
          </div>
        ))}
      </div>
    </>
  );
}

export default Exercises;
