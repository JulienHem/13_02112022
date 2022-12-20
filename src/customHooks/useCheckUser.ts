import {useNavigate} from "react-router-dom";
import UserService from "../services/user.service";
import {useLayoutEffect} from "react";
import {useDispatch} from "react-redux";
import {getUser} from "../redux/user/actions";

export default function useLogged() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function checkUser() {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        } else {
            getUser(token)(dispatch);
        }
    }

    useLayoutEffect(() => {
        checkUser();
    }, [])
}

