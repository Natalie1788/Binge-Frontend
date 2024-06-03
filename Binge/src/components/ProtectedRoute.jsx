
import PropTypes from 'prop-types'; 
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
        return <Navigate to="/signup" replace />;
    }

    

    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired 
};

export default ProtectedRoute;
