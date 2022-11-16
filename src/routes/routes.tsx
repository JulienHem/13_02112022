import {Route, Routes} from "react-router-dom";
import Login from "../pages/login/login";
import Homepage from "../pages/homepage/homepage";
import Profile from "../pages/profile/profile";
import './routes.scss'

export default function RoutesC() {

    return(
            <Routes>
                <Route path="/" element={ <Homepage />} />
                <Route path="/login" element={ <Login />} />
                <Route path="/profile/:id" element={ <Profile />} />
            </Routes>
    )
}
