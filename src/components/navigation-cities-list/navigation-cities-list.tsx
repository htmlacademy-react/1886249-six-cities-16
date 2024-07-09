import { CITIES } from '../../const';

type NavigationCitiesItemProps = {
  cityName: string;
};

function NavigationCitiesItem({
  cityName,
}: NavigationCitiesItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{cityName}</span>
      </a>
    </li>
  );
}

function NavigationCitiesList(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <NavigationCitiesItem key={city} cityName={city} />
      ))}
    </ul>
  );
}

export default NavigationCitiesList;
