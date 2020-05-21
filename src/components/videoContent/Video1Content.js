import React, { Component } from "react";
import YouTube from "react-youtube";

//https://www.youtube.com/watch?v=HnlHcn8wxb0
//https://youtu.be/HnlHcn8wxb0
class VideoContent extends Component {
  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
    console.log(event.target);
  }
  render() {
    const opts = {
      height: "320",
      width: "540",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const { videoId } = this.props;
    return (
      <YouTube videoId={videoId} opts={opts} onReady={this.videoOnReady} />
    );
  }
}

export default VideoContent;
