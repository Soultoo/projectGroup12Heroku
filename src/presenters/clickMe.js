import React from 'react';

function ClickMe() {
  const [number, setNumber] = React.useState(0)
  return (
    <div>
      <button onClick={()=>setNumber(number-1)}>-</button>
      <p>{number}</p>
      <button onClick={()=>setNumber(number+1)}>+</button>
    </div>
  );
}

export default ClickMe;