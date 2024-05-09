import Decrement from "./components/decrement/Decrement"
import Display from "./components/display/Display"
import Increment from "./components/increment/Increment"
import Reset from "./components/reset/Reset"
import './scss/style.scss'

function App() {

  return (
    <div className="home">
      <h1>Counter App</h1>
      <div className="wrapper">
        <Increment/>
        <Display/>
        <Decrement/>
      </div>
      <Reset/>
    </div>
  )
}

export default App
