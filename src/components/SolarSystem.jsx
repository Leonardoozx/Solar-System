import React from 'react';
import Title from './Title';
import Planets from '../data/planets';

const AllTheInfos = Planets.map((x) => {
  const { name: planetName, image: planetImage } = x;
  return (
    <div data-testid="planet-card" key={ planetName }>
      <p data-testid="planet-name">{planetName}</p>
      <img src={ planetImage } alt={ `Planeta ${planetName}` } />
    </div>
  );
});

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {AllTheInfos}
      </div>
    );
  }
}

export default SolarSystem;
