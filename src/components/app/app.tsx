import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import { FOUND_PLASES } from '../../const';
import FavouritePage from '../../pages/favourites-page/favourites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage foundPlaces={FOUND_PLASES} />} />
        <Route path="/favourites" element={<FavouritePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/offer/:id" element={<OfferPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
