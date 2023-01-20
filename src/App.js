
import './App.css';
import Sidebar from './Components/Leftmenu/Sidebar'
import Search from './Components/Searchbar/Search';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Search />
      <Main />
    </div>
  );
}

export default App;
