import Decrement from "./components/decrement/Decrement"
import Display from "./components/display/Display"
import Increment from "./components/increment/Increment"
import Reset from "./components/reset/Reset"

function App() {

  return (
    <>
      <h1>Counter App</h1>
      <div>
        <Increment/>
        <Display/>
        <Decrement/>
      </div>
      <Reset/>
    </>
  )
}

export default App
