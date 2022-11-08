import {
  GlitchHeader,
  GlitchContainer,
  HomeContainer,
  HeroContainer,
} from "./Home.styles";

export const Home = () => {
  return (
    <HomeContainer>
      <HeroContainer>
        <GlitchContainer>
          <GlitchHeader>Kevin Chang</GlitchHeader>
          <GlitchHeader>Kevin Chang</GlitchHeader>
        </GlitchContainer>
        <h2>Cybersecurity Analyst</h2>
      </HeroContainer>
    </HomeContainer>
  );
};
