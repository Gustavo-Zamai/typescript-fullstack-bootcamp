import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import { Signup } from './Pages/Signup/Signup';
import { User } from './Pages/User/User';


// the sign <> </> means React Fragment, it is used to group a list of children without adding extra nodes to the DOM.
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/home' element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
