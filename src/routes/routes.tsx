import {Route, Routes} from "react-router-dom";
import Login from "../pages/login/login";
import Homepage from "../pages/homepage/homepage";

export default function RoutesC() {

    return(
        <Routes>
            <Route path="/" element={ <Homepage />} />
            <Route path="/login" element={ <Login />} />
        </Routes>
    )
}
