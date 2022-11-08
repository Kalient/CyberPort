import styled from "styled-components/macro";

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const HeroContainer = styled.div`
  h2 {
    color: white;
    text-transform: uppercase;
    font-family: "Libre Barcode 128 Text", cursive;
    font-size: 6.2rem;
    font-weight: 300;
    margin: 0;
  }
`;

export const GlitchHeader = styled.h1`
  font-family: "Rubik Maze";
  font-size: 6rem;
  text-transform: uppercase;
  color: white;
  margin: 0;

  text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
    -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
    0.025em 0.05em 0 rgba(0, 0, 255, 0.75);

  animation: glitch 500ms infinite;
  animation: glitch 650ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  transform: translate(-0.025em, -0.0125em);

  opacity: 0.8;

  @keyframes glitch {
    0% {
      text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }
    14% {
      text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }
    15% {
      text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
        0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
        -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    49% {
      text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
        0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
        -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    50% {
      text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
        0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    99% {
      text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
        0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    100% {
      text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
        -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
  }
`;

export const GlitchContainer = styled.div`
  position: relative;
  user-select: none;
  ${GlitchHeader}:first-child {
    animation: glitch 650ms infinite;
    clip-path: polygon(0 0, 100% 0, 100% 36%, 0 45%);
    transform: translate(-0.025em, -0.0125em);
    font-size: 6rem;
    opacity: 0.8;
  }
  ${GlitchHeader}:last-child {
    animation: glitch 375ms infinite;
    clip-path: polygon(0 40%, 100% 33%, 100% 100%, 0 100%);
    transform: translate(0.0125em, 0.025em);
    font-size: 6rem;
    opacity: 0.8;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
