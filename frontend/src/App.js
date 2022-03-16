import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todos from './components/todos/Todos';
import NotFound from './components/not-found/NotFound';
import Home from './components/home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer
        limit={3}
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/todos" element={ <Todos /> } />
          <Route path="/*" element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
