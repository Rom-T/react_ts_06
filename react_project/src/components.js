export const Display = ({counter}) => <div>{counter}</div>;
export const Button = ({handleClick, text}) => <button onClick = {handleClick}>{text}</button>;