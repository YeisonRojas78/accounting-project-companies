import React from 'react';
import TablaPagos from './TablaPagos';

export default function ListaPagos({ tipo, pagos, onEditar, onEliminar, onCerrar }) {
  return (
    <div className="modal">
      <h2>Lista de Pagos a {tipo === 'dian' ? 'DIAN' : 'Bancos'}</h2>
      <TablaPagos tipo={tipo} pagos={pagos} onEditar={onEditar} onEliminar={onEliminar} />
      <button onClick={onCerrar}>Cerrar</button>
    </div>
  );
}