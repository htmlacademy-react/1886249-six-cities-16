import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavouriteList from '../../components/favourite-list/fovourite-list';
import { Helmet } from 'react-helmet-async';
function FavouritePage(): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>6 cities: favourites</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavouriteList />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavouritePage;
