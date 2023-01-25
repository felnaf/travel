import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export { PrivateRoute };

function PrivateRoute({ children }) {
  const { userLoggedIn } = useSelector((x) => x.postReducer);

  if (!userLoggedIn) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login" state={{}} />;
  }

  // authorized so return child components
  return children;
}
