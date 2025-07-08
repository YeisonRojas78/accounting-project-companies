import React from 'react';

export default function CardPago({ titulo, tipo, pagos, onCrear, onVer }) {
  return (
    <div className="card">
      <h3>{titulo}</h3>
      <p>Pagos realizados: {pagos.length}</p>
      <button className="btn btn-primary" onClick={() => onCrear(tipo)}>
        Crear Pago
      </button>
      <button className="btn btn-secondary" onClick={() => onVer(tipo)}>
        Ver Pagos
      </button>
    </div>
  );
}

