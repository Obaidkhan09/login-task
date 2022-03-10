import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todos from './components/todos/Todos';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import NotFound from './components/not-found/NotFound';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/todos" element={ <Todos /> } />
          {/* <Route path="/SignIn" element={ <SignIn /> } />
          <Route path="/SignUp" element={ <SignUp /> } /> */}
          <Route path="/*" element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
