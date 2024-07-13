import {
  // Route,
  // BrowserRouter,
  // Routes,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import { FOUND_PLASES } from '../../const';
import FavouritePage from '../../pages/favourites-page/favourites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import ErrorPage from '../../pages/error-page/error-page';
import { AppRoute } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { AuthorisationStatus } from '../../const';
import { HelmetProvider } from 'react-helmet-async';

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      children: [
        {
          path: AppRoute.Root,
          element: <MainPage foundPlaces={FOUND_PLASES} />,
        },
        {
          path: AppRoute.Favourites,
          element: (
            <PrivateRoute authorisationStatus={AuthorisationStatus.NoAuth}>
              <FavouritePage />
            </PrivateRoute>
          ),
        },
        { path: AppRoute.Login, element: <LoginPage /> },
        { path: AppRoute.Offer, element: <OfferPage /> },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
