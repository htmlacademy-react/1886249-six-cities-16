import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { FOUND_PLASES } from './const';
// import { FoundPlacesProps } from './types/found-places';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App foundPlaces={FOUND_PLASES} />
  </React.StrictMode>
);
