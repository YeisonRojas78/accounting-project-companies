import React from 'react';
import PagosView from './pages/PagosView';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {
 return (
  <div className="layout">
    <Header />
    <main className="main-content">
      <h1>Gestión de Pagos</h1>
      <PagosView />
    </main>
    <Footer />
  </div>
);

}
