import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Helmet>
        <title>Page not found =(</title>
      </Helmet>
      <h1>404 Not Found</h1>
      <Link to="/">Click to go to the main page</Link>
    </div>
  );
}
export default NotFoundPage;
