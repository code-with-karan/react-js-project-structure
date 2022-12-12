import "./App.css";
import Layout from "./layout/main/MainLayout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Welcome } from "@pages";

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;