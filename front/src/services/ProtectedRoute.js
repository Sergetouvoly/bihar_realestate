import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = ({isAllowed, redirectPath='/',children}) =>{

    if (isAllowed){
        return children? children : <Outlet/>;
    }
    return <Navigate to={redirectPath} replace />;
}

export default ProtectedRoute;