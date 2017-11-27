import React from "react";
import VideoListItem from "./VideoListItem.js";

const VideoList = props => {
  const videoList = props.videos.map(video => {
    return (
      <VideoListItem
        key={video.etag}
        video={video}
        changeDisplayVideo={props.changeDisplayVideo}
      />
    );
  });

  return (
    <div className="four wide column">
      {videoList}
    </div>
  );
};
export default VideoList;
