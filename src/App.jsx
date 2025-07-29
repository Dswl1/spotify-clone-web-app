import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import LibraryPage from './pages/LibraryPage';
import ErrorPage from './pages/ErrorPage';
import PreviewBanner from './components/PreviewBanner';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <PreviewBanner />
      <Player />
    </div>
  );
}

export default App;
