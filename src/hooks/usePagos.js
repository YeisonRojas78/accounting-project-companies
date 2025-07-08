import { useState, useEffect } from 'react';

const STORAGE_KEY = 'pagos';

export function usePagos() {
  const [pagos, setPagos] = useState({ bancos: [], dian: [] });

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || { bancos: [], dian: [] };
    setPagos(datos);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pagos));
  }, [pagos]);

  const agregarPago = (tipo, nuevoPago) => {
    setPagos(prev => ({
      ...prev,
      [tipo]: [...prev[tipo], { ...nuevoPago, id: Date.now() }],
    }));
  };

  const editarPago = (tipo, pagoEditado) => {
    setPagos(prev => ({
      ...prev,
      [tipo]: prev[tipo].map(p => (p.id === pagoEditado.id ? pagoEditado : p)),
    }));
  };

  const eliminarPago = (tipo, id) => {
    setPagos(prev => ({
      ...prev,
      [tipo]: prev[tipo].filter(p => p.id !== id),
    }));
  };

  return { pagos, agregarPago, editarPago, eliminarPago };
}