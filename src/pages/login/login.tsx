import './login.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import UserService from "../../services/user.service";
import {useNavigate} from "react-router-dom";
import {getUser} from "../../redux/user/actions";
import {useAppDispatch} from "../../hooks/hooks";


export default function Login() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const userData = await UserService.login(email, password);
        navigate('/profile');
        await getUser(userData)(dispatch)
    }

    return (
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
    )
}