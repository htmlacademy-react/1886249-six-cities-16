import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage, { FoundPlacesProps } from '../../pages/main-page/main-page';
import FavouritePage from '../../pages/favourites-page/favourites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { AppRoute } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { AuthorisationStatus } from '../../const';
import { HelmetProvider } from 'react-helmet-async';

function App({ foundPlaces }: FoundPlacesProps): JSX.Element {
  const router = createBrowserRouter([
    {
      children: [
        {
          path: AppRoute.Root,
          element: <MainPage foundPlaces={foundPlaces} />,
        },
        {
          path: AppRoute.Favourites,
          element: (
            <PrivateRoute authorisationStatus={AuthorisationStatus.Auth}>
              <FavouritePage />
            </PrivateRoute>
          ),
        },
        { path: AppRoute.Login, element: <LoginPage /> },
        { path: AppRoute.Offer, element: <OfferPage /> },
      ],
      errorElement: <NotFoundPage />,
    },
  ]);

  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
