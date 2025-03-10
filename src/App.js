import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Playlists from './Playlists/Playlists';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div>
    <Sidebar></Sidebar>
    <Header></Header>
    <Playlists></Playlists>
    <Footer></Footer>
    </div>
  );
}

export default App;
