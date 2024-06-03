
import PropTypes from 'prop-types'; // Import PropTypes
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
        return <Navigate to="/signup" replace />;
    }

    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired // Validate children prop
};

export default ProtectedRoute;
