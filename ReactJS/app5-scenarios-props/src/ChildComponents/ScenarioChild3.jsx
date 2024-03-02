export const NewWelcome = (props) =>{
    return(
        <div>
          <h3>{props.newWelcome}</h3>
          {props.getBtn()}
        </div>
    )
}