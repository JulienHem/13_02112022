import {connect} from "react-redux";
import {RootState} from "../../redux";
import {User} from "../../models/user";
import Input from "../../components/input/input";
import {useState} from "react";
import Button from "../../components/button/button";
import AccountList from "../../components/accountList/accountList";
import './profile.scss';

interface IStateProps {
    user: User | null,
}

function Profile({user}: IStateProps) {

    const [firstName, setFirstName] = useState<string | undefined>(user?.firstName);
    const [lastName, setLastName] = useState<string | undefined>(user?.lastName);

    const handleSave = () => {
        return;
    }

    const handleCancel = () => {
        return;
    }

    return(
        <div className="profile">
            <div className="profile-head">
                <h1>Welcome Back</h1>
                <div className="profile-head-inputs">
                    <Input type={'text'} setValue={setFirstName} value={firstName} />
                    <Input type={'text'} setValue={setLastName} value={lastName} />
                </div>
                <div className="profile-head-btns">
                    <Button label={'Save'} handleClick={handleSave} color={'secondary'} size={'s'}/>
                    <Button label={'Cancel'} handleClick={handleSave} color={'secondary'} size={'s'}/>
                </div>
            </div>

            <div className="profile-body">
                <AccountList />
            </div>

        </div>
    )
}

function mapStateToProps( state : RootState )
{
    return {
        user: state.user.content
    }
}

export default connect(mapStateToProps)( Profile )
