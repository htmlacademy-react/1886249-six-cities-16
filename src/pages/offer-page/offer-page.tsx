import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import OfferContent from '../../components/offer-components/offer/offer';
import NearOffersList from '../../components/offer-components/near-offers-list/near-offers-list';

function OfferPage(): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        <OfferContent />
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <NearOffersList />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
