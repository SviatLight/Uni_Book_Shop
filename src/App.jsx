import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import BookPreview from './pages/BookPreview';
import Login from './pages/Login';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/book/:id" element={<BookPreview />} />
          {/* <Route path="/signup" element={<Auth />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
