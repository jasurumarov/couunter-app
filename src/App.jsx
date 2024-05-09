import Decrement from "./components/decrement/Decrement"
import Display from "./components/display/Display"
import Anim from "./components/gsap/Anim"
import Increment from "./components/increment/Increment"
import Reset from "./components/reset/Reset"
import './scss/style.scss'

function App() {

  return (
    <>
      <div className="home">
        <h1>Counter App</h1>
        <div className="wrapper">
          <Increment/>
          <Display/>
          <Decrement/>
        </div>
        <Reset/>
      </div>
      <Anim/>
    </>
  )
}

export default App
