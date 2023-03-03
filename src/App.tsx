import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import { fetchGetQuotesA, fetchGetQuotesB } from './api';
import './App.css'
import { HeaderWithLayout, Modal } from './components';
import { AboutPage, QuotesPage } from './pages';
import { QuotesStore } from './store/quotes';

const App = React.memo(() => {

  return (
    <>
      <HeaderWithLayout />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/quotes/a" element={<QuotesPage key="quotesA" store={new QuotesStore(fetchGetQuotesA)} title="Котировки А" />} />
        <Route path="/quotes/b" element={<QuotesPage key="quotesB" store={new QuotesStore(fetchGetQuotesB)} title="Котировки Б"/>} />
      </Routes>
    </>
  )
})

export default App
