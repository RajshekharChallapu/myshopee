import Navbar from './header/Navbar.jsx'
import Route from './router/Route.jsx';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Route />
      </div>
    </div>
  );
}
export default App;
