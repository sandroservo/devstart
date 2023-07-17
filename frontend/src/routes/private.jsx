import { useSelector } from "react-redux";
import { Navigate } from  "react-router-dom"

export const Private = ({ Component }) =>{
    const isSigned = useSelector(state => state?.auth?.signed);

    return isSigned ? <Component /> : <Navigate to="/login" />
}