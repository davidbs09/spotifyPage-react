import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Main/>
    </div>
  );
}

export default App;
