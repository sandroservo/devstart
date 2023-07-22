import { useSelector } from "react-redux";
import { Navigate } from  "react-router-dom"
import { Navigate as Menu } from "../components";

export const Private = ({ Component }) =>{
    const isSigned = useSelector(state => state?.auth?.signed);

    return isSigned ? <Menu><Component /></Menu> : <Navigate to="/login" />
}