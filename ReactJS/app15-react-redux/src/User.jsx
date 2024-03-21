import { Component } from "react";
import { connect } from "react-redux";

class User extends Component{

    render(){
        console.log(this.props)
        return(
            <div>
                <h2>Welcome To User Component</h2>
                <ul>
                    {this.props.users.map((usr,i) => {
                        return <li key={i}>{usr}</li>
                    })}
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state){
    console.log(state);
    return{
        users : state.users
    }
}

export default connect(mapStateToProps)(User)