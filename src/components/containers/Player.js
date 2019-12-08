import React from "react";
import Video from "../Video";
import { ThemeProvider } from "styled-components";
import Playlist from "./Playlist";
import StyledPlayer from "../styles/StyledPlayer";

const theme = {
  bgcolor: "#353535",
  bgcolorItem: "#414141",
  bgcolorItemActive: "#405c63",
  bgcolorPlayed: "#526d4e",
  border: "none",
  borderPlayed: "none",
  color: "#FFF"
};

const themeLight = {
  bgcolor: "#FFF",
  bgcolorItem: "#FFF",
  bgcolorItemActive: "#80a7b1",
  bgcolorPlayed: "#7d9979",
  border: "1px solid #353535",
  borderPlayed: "none",
  color: "#353535"
};

const Player = props => {
  const nightModeCallback = () => {};

  const endCallback = () => {};

  const progressCallback = () => {};

  return (
    <ThemeProvider theme={state.nightMode ? theme : themeLight}>
      {state.videos !== null ? (
        <StyledPlayer>
          <Video 
          active={state.activeVideo}
          autoplay={state.autoplay}
          endCallback={endCallback}
          progressCallback={progressCallback}
          />
          <Playlist
          videos={state.videos}
          active={state.activeVideo}
          nightModeCallback={nightModeCallback}
          nightMode={state.nightMode}
          />
        </StyledPlayer>
      ) : null}
    </ThemeProvider>
  );
};

export default Player;
