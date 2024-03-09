import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./components/Header";
import Detail from "./pages/Detail";

const App = (): JSX.Element => {
  return (
    <div className="container max-w-[1400px] md:px-24 px-5 mx-auto">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:make/:model/:year" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
