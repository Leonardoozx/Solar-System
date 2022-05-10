import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="missions">
        <Title headline="Missões" />
        {missions.map((x) => {
          const { name, year, country, destination } = x;
          return (
            <MissionCard
              key={ name + year }
              name={ name }
              year={ JSON.parse(year) }
              country={ country }
              destination={ destination }
            />
          );
        })}
      </div>
    );
  }
}

export default Missions;
