import { useState, useEffect } from 'react';

const STORAGE_KEY = 'pagos';

export function usePagos() {
  // Cargar desde localStorage al iniciar
  const [pagos, setPagos] = useState(() => {
    const datosGuardados = localStorage.getItem(STORAGE_KEY);
    return datosGuardados
      ? JSON.parse(datosGuardados)
      : { bancos: [], dian: [] }; // Estructura inicial
  });

  // Guardar automáticamente al cambiar el estado
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pagos));
  }, [pagos]);

  // Funciones CRUD
  const agregarPago = (tipo, nuevo) => {
    const nuevoPago = { ...nuevo, id: Date.now() };
    setPagos((prev) => ({
      ...prev,
      [tipo]: [...prev[tipo], nuevoPago],
    }));
  };

  const editarPago = (tipo, editado) => {
    setPagos((prev) => ({
      ...prev,
      [tipo]: prev[tipo].map((p) => (p.id === editado.id ? editado : p)),
    }));
  };

  const eliminarPago = (tipo, id) => {
    setPagos((prev) => ({
      ...prev,
      [tipo]: prev[tipo].filter((p) => p.id !== id),
    }));
  };

  return { pagos, agregarPago, editarPago, eliminarPago };
}
