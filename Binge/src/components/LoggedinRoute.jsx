import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const LoggedinRoute = ({ children }) => {
  const userId = localStorage.getItem("userId");

  if (userId) {
    return <Navigate to="/profile" replace />;
  }

  return children;
};

LoggedinRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoggedinRoute;
