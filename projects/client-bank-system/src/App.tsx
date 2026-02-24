import { Sign } from 'crypto';
import Login from './Pages/Login/Login';
import { Signup } from './Pages/Signup/Signup';


// the sign <> </> means React Fragment, it is used to group a list of children without adding extra nodes to the DOM.
function App() {
  return (

    <Signup />
  );
}

export default App;
