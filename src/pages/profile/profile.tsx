import {connect} from "react-redux";
import {RootState} from "../../redux";
import {User} from "../../models/user";

interface IStateProps {
    user: User | undefined,
}

function Profile({user}: IStateProps) {

    console.log(user)

    return(
        <div>

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
