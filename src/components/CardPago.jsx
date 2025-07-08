import React from 'react';

export default function CardPago({ titulo, tipo, pagos, onCrear, onVer }) {
  return (
    <div className="card">
      <h3>{titulo}</h3>
      <p>Pagos realizadosss: {pagos.length}</p>
      <button onClick={() => onCrear(tipo)}>Crear Pago</button>
      <button onClick={() => onVer(tipo)}>Ver Pagos</button>
    </div>
  );
}
