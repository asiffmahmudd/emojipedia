import './App.css';
import Entry from './components/Entry';
import emojipedia from './emojipedia';


function App() {
  return (
    <div className="App">
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {
          emojipedia.map(item => <Entry key={item.id} name={item.name} emoji={item.emoji} meaning={item.meaning} />)
        }
      </dl>
    </div>
  );
}

export default App;
