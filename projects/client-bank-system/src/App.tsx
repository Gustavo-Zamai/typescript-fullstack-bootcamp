import { Card } from './components/Card';
import { Layout } from './components/Layout';


// the sign <> </> means React Fragment, it is used to group a list of children without adding extra nodes to the DOM.
function App() {
  return (
      <Layout>
        <Card 
          id={1} 
          paragraph="Card 1 paragraph" 
          details="Card 1 details" 
        />
        <Card 
          id={2} 
          paragraph="Card 2 paragraph" 
          details="Card 2 details" 
        />
        <Card 
          id={3} 
          paragraph="Card 3 paragraph" 
          details="Card 3 details" 
        />
        <Card 
          id={4} 
          paragraph="Card 4 paragraph" 
          details="Card 4 details" 
        />
      </Layout>
  );
}

export default App;
