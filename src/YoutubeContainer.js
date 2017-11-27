import React from "react";
import VideoDisplay from "./VideoDisplay.js";
import VideoList from "./VideoList.js";
import SearchBar from "./SearchBar.js";
import keys from "./keys";

class YoutubeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      displayVideo: {},
      term: "lemur"
    };
  }

  componentDidMount() {
    this.fetchVideos();
  }

  fetchVideos = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${keys.API_KEY}&q=${this
        .state.term}&type=video`
    )
      .then(res => res.json())
      .then(response => {
        const videos = response.items;
        this.setState({
          videos,
          displayVideo: videos[0]
        });
      });
  };

  handleSearchChange = newTerm => {
    this.setState({
      term: newTerm
    });
  };

  handleSearch = () => {
    this.fetchVideos();
  };

  changeDisplayVideo = video => {
    this.setState({
      displayVideo: video
    });
  };

  render() {
    return (
      <div className="ui grid container">
        <SearchBar
          searchTerm={this.state.term}
          handleSearch={this.handleSearch}
          handleChange={this.handleSearchChange}
        />
        <VideoDisplay displayVideo={this.state.displayVideo} />
        <VideoList
          videos={this.state.videos}
          changeDisplayVideo={this.changeDisplayVideo}
        />
      </div>
    );
  }
}

export default YoutubeContainer;
