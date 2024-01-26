import React from 'react';
import PropTypes from 'prop-types';

function ExerciseVideos({ exerciseVideos, name }) {
  if (!exerciseVideos.length) return 'Loading...';

  return (
    <div className="my-10">
      <h3 className="mb-10 font-bold text-lg md:text-2xl">
        Watch
        {' '}
        <span className="font-bold capitalize text-fuchsia-600">{name}</span>
        {' '}
        exercise videos.
      </h3>
      <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-5 lg:gap-10">
        {exerciseVideos?.slice(0, 6).map((item) => (
          <a
            key={item.video.videoId}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} className="rounded-md h-52" />
            <p className="font-bold text-base capitalize">
              {item.video.title}
            </p>
            <p className="text-sm font-bold">
              {item.video.channelName}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ExerciseVideos;

ExerciseVideos.propTypes = {
  exerciseVideos: PropTypes.instanceOf(Array),
  name: PropTypes.string,
};

ExerciseVideos.defaultProps = {
  exerciseVideos: [],
  name: '',
};
