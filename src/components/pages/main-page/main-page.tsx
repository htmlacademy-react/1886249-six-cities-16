import Card from '../../card/Card';
import Header from '../../header/header';
import cardData from '../../mocks/mocks';
import NavigationCitiesList from '../../navigation-cities-list/navigation-cities-list';
import SortForm from '../../sort-form/sort-form';
import Map from '../../map/map';

type MainPageProps = {
  foundPlaces: number;
};

// type CardProps = {
//   previewImage: string;
//   price: number;
//   title: string;
// };

function MainPage({ foundPlaces }: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <NavigationCitiesList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {foundPlaces} places to stay in Amsterdam
              </b>
              <SortForm />
              <div className="cities__places-list places__list tabs__content">
                {cardData.map((data) => (
                  <Card
                    key={data.title}
                    previewImage={data.previewImage}
                    price={data.price}
                    title={data.title}
                  />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
