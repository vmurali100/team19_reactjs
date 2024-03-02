export const NewFruitsArr = (props) => {
  return (
    <div>
      <ul>
        {props.newArr.map((val) => {
          return <li>{val}</li>;
        })}
      </ul>
      {props.getBtn()}
    </div>
  );
};
