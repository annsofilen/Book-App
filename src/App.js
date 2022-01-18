import books from './assets/childrensbooks.json';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

//components
import BookPage from './views/BookPage';
import Error from './views/Error';
import Home from './views/Home';

function App() {

  const [list1, setList1] = useState([]);
  function getList(list) {
    setList1(list);

  }

  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home books={books} getList={getList} />} ></Route>
        <Route path='/bookpage' element={<BookPage key={list1[0]} title={list1[1]} author={list1[2]} publisher={list1[3]} year={list1[4]} pages={list1[5]} plot={list1[6]} audience={list1[7]} color={list1[8]} />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div >
  );
}

export default App;
