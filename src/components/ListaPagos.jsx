import React from 'react';

export default function ListaPagos({ tipo, pagos, onEditar, onEliminar, onCerrar }) {
  return (
    <div className="lista-pagos">
      <h3>Pagos {tipo}</h3>
      <ul>
        {pagos.map((pago) => (
          <li key={pago.id}>
            {pago.descripcion} - ${pago.monto}
            <button onClick={() => onEditar(pago)}>Editar</button>
            <button onClick={() => onEliminar(tipo, pago.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={onCerrar}>Cerrar</button>
    </div>
  );
}
