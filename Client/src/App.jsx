import { BrowserRouter, Route,Routes}from "react-router-dom";
import Error from './Pages/Error';
import Home from "./Pages/Home";
import Main from "./Pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Dashboard" element={<Main/>}/>
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App