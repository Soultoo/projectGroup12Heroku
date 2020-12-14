import Board from "../presenters/board";

const GameView = ({props, nav}) => {
  return (
    <div class="container">
      <p>
        <button onClick = {()=>nav[0]()}>Quit</button>
      </p>
      <p>
        <button onClick = {()=>nav[1]()}>Continue</button>
      </p>
      <Board imageURL={"https://lh3.googleusercontent.com/proxy/V-jet7BRIl16H_JNrEF44tlSrseJHHTvogfQ_1HVmYEzYdtt84YiNf3h1-XiRbXVUayEScZ-sSF9yd_xBsu0CMB5ugf_XlWn8aLM7IvCse1fr-q-oOrI-PctlWIozMXtD1TFgxNf5NVQMTRp8YOF-BTBbPYUmM29oZVVGZPPSuzeQasX58QrzngJgecN4tbC_S9SE_cyGLMDivt42vL2ysnFCRS5PdYrWmbNHQ"}/>
      <p>
        <button onClick = {()=>null}>Reset round</button>
      </p>
    </div>
  )
}

export default GameView;