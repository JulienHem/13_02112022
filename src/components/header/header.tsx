import {useNavigate} from "react-router-dom";
import BankLogo from '../../assets/images/argentBankLogo.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './header.scss';
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function Header() {

    const navigate = useNavigate();

    return(
        <nav className="main-nav">
            <a className="main-nav-logo" onClick={() => navigate('/')}>
                <img
                    className="main-nav-logo-image"
                    src={BankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div className="main-nav-item">
                <FontAwesomeIcon icon={ faUserCircle } />
                <a className="main-nav-item-link" onClick={() => navigate('/login')}>
                    <div>Sign In</div>
                </a>
            </div>
        </nav>
    )
}
