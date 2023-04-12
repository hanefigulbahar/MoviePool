"use client";
import { FC } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

interface YoutubeVideoProps {
  id: string;
}

const YoutubeVideo: FC<YoutubeVideoProps> = ({ id }) => {
  const opts: YouTubeProps["opts"] = {
    height: "500",
    width: "100%",
  };
  return <YouTube videoId={id} opts={opts} />;
};

export default YoutubeVideo;
