import React, { useEffect } from 'react';
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
      <table>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
        {missions?.map((mission) => (
          <tr key={mission.mission_id}>
            <td>{mission.name}</td>
            <td>{mission.description}</td>
            <td><p>NOT a MEMBER</p></td>
            <td><button type="button">Join Mission</button></td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default About;
