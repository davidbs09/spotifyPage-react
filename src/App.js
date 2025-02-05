import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Main/>
      <Footer />
    </div>
  );
}

export default App;
