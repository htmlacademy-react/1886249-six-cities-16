export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

export const FOUND_PLASES = 312;

export enum AppRoute {
  Root = '/',
  Favourites = '/favourites',
  Login = '/login',
  Offer = '/offer/:id',
}

export enum AuthorisationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
