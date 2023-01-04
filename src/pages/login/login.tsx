import './login.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import UserService from "../../services/user.service";
import {useNavigate} from "react-router-dom";
import {getUser, setUser} from "../../redux/user/actions";
import {useAppDispatch} from "../../hooks/hooks";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import {getAccounts, setAccounts} from "../../redux/accounts/actions";
import {mockedAccountData} from "../../mockedData/account";


export default function Login() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const userToken = await UserService.login(email, password);
            if(userToken) {
                const user = await getUser(userToken)(dispatch);
                localStorage.setItem('token', userToken);
                navigate(`/profile/${(user.payload.id)}`);
                dispatch(setAccounts(mockedAccountData))
            }
        } catch (e) {
            setError('Une erreur est survenue')
        }

    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon className="sign-in-icon" icon={faUserCircle}/>
                <h1>Sign In</h1>
                <form>
                    <Input type={'string'} setValue={setEmail} value={email} label={'Email'} htmlTitle={'email'} />
                    <Input type={'password'} setValue={setPassword} value={password} label={"Password"} htmlTitle={'password'} />
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me"/>
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <Button label={'Sign In'} handleClick={handleSubmit} color={'primary'} size={'s'} />
                </form>

                {error && error}
            </section>
        </main>
    )
}
