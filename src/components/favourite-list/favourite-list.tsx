import FavouriteCard from '../favourite-card/favourite-card';
import { FAV_CARD_DATA_AMSTER } from '../mocks/favourite-mocks';
import { FAV_CARD_DATA_COLOGNE } from '../mocks/favourite-mocks';

function FavouriteList(): JSX.Element {
  return (
    <ul className="favorites__list">
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {FAV_CARD_DATA_AMSTER.map((data) => (
            <FavouriteCard
              key={data.id}
              previewImage={data.previewImage}
              price={data.price}
              title={data.title}
              id={data.id}
            />
          ))}
        </div>
      </li>

      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Cologne</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {FAV_CARD_DATA_COLOGNE.map((data) => (
            <FavouriteCard
              key={data.id}
              previewImage={data.previewImage}
              price={data.price}
              title={data.title}
              id={data.id}
            />
          ))}
        </div>
      </li>
    </ul>
  );
}

export default FavouriteList;
