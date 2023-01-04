import { Link, useNavigate } from "react-router-dom";
import BankLogo from '../../assets/images/argentBankLogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './header.scss';
import { faSignOut, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../../redux";
import { connect } from "react-redux";
import { User } from "../../models/user";
import { resetUser, setUser } from "../../redux/user/actions";
import { useAppDispatch } from "../../hooks/hooks";

interface IProps {
    user: User | null,
}
function Header({ user }: IProps) {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        navigate(`/`);
        dispatch(setUser(null));
    }

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to='/'>
                <img
                    className="main-nav-logo-image"
                    src={BankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div className="main-nav-item">

                {
                    user ?
                        <>
                            <FontAwesomeIcon icon={faUserCircle} />
                            <Link className="main-nav-item-link"
                                to={`profile/${user.id}`}>
                                <div>{user.firstName}</div>
                            </Link>
                            <FontAwesomeIcon icon={faSignOut} />
                            <Link className="main-nav-item-link" to='/' onClick={handleLogout}>
                                <div>Sign Out</div>
                            </Link>
                        </>

                        :
                        <a className="main-nav-item-link" onClick={() => navigate('/login')}>
                            <div>Sign In</div>
                        </a>
                }

            </div>
        </nav>
    )
}

function mapStateToProps(state: RootState) {
    return {
        user: state.user.content
    }
}

export default connect(mapStateToProps)(Header)


