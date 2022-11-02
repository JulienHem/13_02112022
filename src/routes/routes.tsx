import {Route, Routes} from "react-router-dom";
import Login from "../pages/login/login";
import Homepage from "../pages/homepage/homepage";

export default function RoutesC() {
    
    return(
        <Routes>
            <Route path="/" element={ <Login />} />
            <Route path="/home/user/:id" element={ <Homepage />} />
        </Routes>
    )
}