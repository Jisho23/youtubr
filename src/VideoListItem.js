import React from "react";

const VideoListItem = props => {
  const clicked = () => {
    props.changeDisplayVideo(props.video);
  };

  if (!props.video.snippet) {
    return <div> Loading </div>;
  }
  return (
    <div className="four wide column">
      <div className="ui relaxed items">
        <div className="item">
          <div className="ui small image">
            <img
              onClick={clicked}
              src={props.video.snippet.thumbnails.default.url}
            />
          </div>
          <div className="content" onClick={clicked}>
            {props.video.snippet.title}
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoListItem;
