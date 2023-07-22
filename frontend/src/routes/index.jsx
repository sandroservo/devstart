import {Routes, Route} from "react-router-dom"
import { Private } from "./private";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import  Users from "../pages/users";


export const  RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Private Component={Home} />} />
            <Route path="/usuarios" element={<Private Component={Users} />} />
        </Routes>
    )
}