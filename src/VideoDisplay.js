import React from "react";

const VideoDisplay = props => {
  if (!props.displayVideo.id) {
    return <div> "Loading"</div>;
  }

  const videoId = props.displayVideo.id.videoId;
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="twelve wide column">
      <div className="ui raised segments">
        <div className="ui segment">
          <div className="ui embed">
            <iframe src={embedUrl} />
          </div>
        </div>
        <div className="ui segment">
          <h4>
            {props.displayVideo.snippet.title}
          </h4>
        </div>
        <div className="ui secondary segment">
          <p>
            {props.displayVideo.snippet.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoDisplay;
