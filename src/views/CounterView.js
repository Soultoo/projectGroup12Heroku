

const CounterView = (props) => {
  return (
    <div>
      <p> Counter value: {props.counter } </p>
      <button onClick = {props.increment}> + </button>
    </div>
  )
}

export default CounterView;