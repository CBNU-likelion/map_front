import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./StartPage";
import MainPage from "./mainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/start" element={<StartPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
