import Header from '../../header/header';
import Footer from '../../footer/footer';
import FavouriteList from '../../favourite-list/fovourite-list';
function FavouritePage(): JSX.Element {
  return (
    <div className="page">
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
