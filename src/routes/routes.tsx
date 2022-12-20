import {Route, Routes} from "react-router-dom";
import Login from "../pages/login/login";
import Homepage from "../pages/homepage/homepage";
import Profile from "../pages/profile/profile";
import './routes.scss'
import TransactionsPage from "../pages/transactions/transactionsPage";

export default function RoutesC() {

    return(
            <Routes>
                <Route path="/" element={ <Homepage />} />
                <Route path="/login" element={ <Login />} />
                <Route path="/profile/:id" element={ <Profile />} />
                <Route path="/profile/transaction/:transactionId" element={ <TransactionsPage />} />
            </Routes>
    )
}
