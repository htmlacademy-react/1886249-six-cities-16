import CITIES from '../const';

type Cities = {
  city: string;
};

function NavigationCitiesItem({ city }: Cities): JSX.Element {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}

function NavigationCitiesList(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <NavigationCitiesItem key={city} city={city} />
      ))}
    </ul>
  );
}

export default NavigationCitiesList;
