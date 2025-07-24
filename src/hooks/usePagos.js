import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE = 'http://localhost:3001/api';

export function usePagos() {
  const [pagos, setPagos] = useState({ bancos: [], dian: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar datos al iniciar
  useEffect(() => {
    const cargarPagos = async () => {
      try {
        const [resBancos, resDian] = await Promise.all([
          axios.get(`${API_BASE}/pagos-bancos`),
          axios.get(`${API_BASE}/pagos-dian`)
        ]);
        setPagos({
          bancos: resBancos.data,
          dian: resDian.data,
        });
      } catch (err) {
        console.error('Error al cargar pagos', err);
        setError(`Error al cargar pagos: ${err.message}`);
        setLoading(false);
      }
    };

    cargarPagos();
  }, []);

  // Agregar un nuevo pago
  const agregarPago = async (tipo, nuevoPago) => {
    try {
      const endpoint = tipo === 'bancos' ? 'pagos-bancos' : 'pagos-dian';
      const res = await axios.post(`${API_BASE}/${endpoint}`, nuevoPago);
      setPagos((prev) => ({
        ...prev,
        [tipo]: [...prev[tipo], res.data],
      }));
    } catch (error) {
      console.error('Error al agregar el pago:', error);
    }
  };

  // Editar un pago
  const editarPago = async (tipo, pagoEditado) => {
    try {
      const endpoint = tipo === 'bancos' ? 'pagos-bancos' : 'pagos-dian';
      const res = await axios.put(`${API_BASE}/${endpoint}/${pagoEditado.id}`, pagoEditado);
      setPagos((prev) => ({
        ...prev,
        [tipo]: prev[tipo].map((p) => (p.id === pagoEditado.id ? res.data : p)),
      }));
    } catch (error) {
      console.error('Error al editar el pago:', error);
    }
  };

  // Eliminar un pago
  const eliminarPago = async (tipo, id) => {
    try {
      const endpoint = tipo === 'bancos' ? 'pagos-bancos' : 'pagos-dian';
      await axios.delete(`${API_BASE}/${endpoint}/${id}`);
      setPagos((prev) => ({
        ...prev,
        [tipo]: prev[tipo].filter((p) => p.id !== id),
      }));
    } catch (error) {
      console.error('Error al eliminar el pago:', error);
    }
  };

  return {
    pagos,
    agregarPago,
    editarPago,
    eliminarPago,
    loading,
    error,
  };
}
