import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Header from "./components/Header"

const App = ():JSX.Element => {
  return (
    <div className="container max-w-[1200px] px-5 mx-auto">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App