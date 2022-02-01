import { Route, Routes } from 'react-router';
import './App.css';
import Create from './components/Create';
import Edit from './components/Edit';
import Navbar from './components/Navbar';
import RecordList from './components/RecordList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
