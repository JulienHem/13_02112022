import './login.scss';
import ArgentBankLogo from '../../assets/images/argentBankLogo.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import UserService from "../../services/user.service";
import {useNavigate} from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const data = await UserService.login(email, password);
            console.log(data)
        } catch (e) {
            setError('Une erreur est survenue, veuillez réessayer');
        }
    }

    return (
        <div>
            <nav className="main-nav">
                <a className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={ArgentBankLogo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </a>
            </nav>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <FontAwesomeIcon className="sign-in-icon" icon={faUserCircle}/>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text"
                                   id="username"
                                   onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                   id="password"
                                   onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me"/><label htmlFor="remember-me"
                        >Remember me</label
                        >
                        </div>
                        <button
                            className="sign-in-button"
                            onClick={e => handleSubmit(e)}>
                            Sign In
                        </button>
                    </form>

                        {error && error}
                </section>
            </main>
        </div>
    )
}