import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchAbout from './fetchAbout';

const About = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    dispatch(fetchAbout());
  }, [dispatch]);

  return (
    <div>
      {missions?.map((mission) => (
        <div key={mission.mission_id}>
          <p>{mission.name}</p>
          <p>{mission.description}</p>
          <p>Hello</p>
        </div>
      ))}
    </div>
  );
};

export default About;
