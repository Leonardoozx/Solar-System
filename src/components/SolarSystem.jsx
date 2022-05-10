import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <Title headline="Planetas" />
        {Planets.map((x) => {
          const { name, image } = x;
          return (
            <PlanetCard
              key={ name }
              planetName={ name }
              planetImage={ image }
            />
          );
        })}
      </div>
    );
  }
}

export default SolarSystem;
