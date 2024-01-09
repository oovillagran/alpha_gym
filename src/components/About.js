import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchAbout from './fetchAbout';

const About = () => {
  const dispatch = useDispatch();
  const about = useSelector((state) => state.about.missions);

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
          <th>Join</th>
        </tr>
        {about?.map((about) => (
          <tr key={about.about_id}>
            <td>{about.about_name}</td>
            <td>{about.description}</td>
            <td><p>NOT a MEMBER</p></td>
            <td><button type="button">Join Mission</button></td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default About;
