

const CounterView = (props) => {
  return (
    <div class="container">
      <p> Counter value: {props.counter } </p>
      <button onClick = {props.increment}> + </button>
    </div>
  )
}

export default CounterView;