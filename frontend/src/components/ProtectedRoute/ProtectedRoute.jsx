import {Navigate, useLocation} from "react-router-dom"
function ProtectedRoute( {children , redirecPath, role} ){
  const isAuth = localStorage.getItem('isAuth')
  const Role = localStorage.getItem('role')
  const location = useLocation();
  if(!isAuth){
    return <Navigate to={redirecPath}/>
  }else if ( Role != role){
    return <Navigate to={location.pathname} />;
  }
  return children
}
export default ProtectedRoute