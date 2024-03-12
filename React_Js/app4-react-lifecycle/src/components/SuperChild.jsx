import Rect, { Component } from "react";

export class SuperChildComponent extends Component{
    constructor(props){
        super();
        this.state={
            users:[],
        }
    }
    static getDerivedStateFromProps(props,state){

        console.log("props from parent is : ",props)
        console.log("state in child is : ",state )
        return {
            newval:props.products * 5
        }
        
    }
    componentDidMount(){
        fetch("http://localhost:3200/Questions").then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data)
            this.setState({users:data})
        })
    }
    render(){
        console.log(this.state)
        return <div>
            <h1>Total cost is : {this.state.newval}</h1>
            <ul>
                {this.state.users.map((usr)=>{
                    return <li>{usr.firstname}</li>

                })}
            </ul>
    
        </div>
    }
}