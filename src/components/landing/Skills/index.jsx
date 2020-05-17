import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail>
      <Details>
        <h1>Hi There!</h1>
        <p>
          Arabica Acerbic Affogato Aftertaste Aged Americano And Aroma spoon pumpkin, roast decaffeinated Brewed
          trifecta organic americano au. Press panna foam aftertaste sugar aged froth Acerbic organic, fair And to
          siphon id at sweet Affogato filter, dark body cream french doppio instant Arabica.
        </p>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
