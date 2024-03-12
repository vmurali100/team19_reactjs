import React, { Component } from 'react'

export const HocClass = (HandleHocClass) => {
    
    class NewHocClass extends Component {
        constructor(props) {
          super(props)
        
          this.state = {
             users:[]
          }
        }

        componentDidMount=()=>{
            fetch("http://localhost:3200/users").then((response)=>response.json()).then((data)=>{
                this.setState({users:data})
            })
        }
      render() {
        const{users}=this.state
        return (
          <div>
            <HandleHocClass users={users}/>
          </div>
        )
      }
    }
    
  return NewHocClass
}
