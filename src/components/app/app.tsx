import MainPage from '../pages/main-page/main-page';
import { FOUND_PLASES } from '../../const';

function App(): JSX.Element {
  return <MainPage foundPlaces={FOUND_PLASES} />;
}

export default App;
