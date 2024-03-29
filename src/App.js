import React from 'react'
import Slist1 from './Component/Slist1';
import { useState } from 'react';
import studentData from "./Data/Data1";
import "./Style/App.css"

const App = () => {
  const [students, setStudent] = useState(studentData);
  
  return (
    <>
      <div className='box'>
        <div className="app">
          <h1>STUDENT :{students.length}</h1>
          <Slist1 students={students} />
          <button onClick={() => setStudent([])} className="button">
            Clear all
          </button>
        </div>
      </div>
    </>
  );
}

export default App