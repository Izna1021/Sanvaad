import React from 'react';
import './App.css';
import FileUploader from './FileUploader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>File Upload to AWS S3</h1>
      </header>
      <main>
        <FileUploader />
      </main>
    </div>
  );
}

export default App;

