import React, { useState, useEffect } from 'react';

export default function ModalPago({ tipo, modo, pago, onGuardar, onCerrar }) {
  const [descripcion, setDescripcion] = useState('');
  const [monto, setMonto] = useState('');

  useEffect(() => {
    if (modo === 'editar' && pago) {
      setDescripcion(pago.descripcion);
      setMonto(pago.monto);
    }
  }, [modo, pago]);

  const manejarGuardar = () => {
    const datos = { descripcion, monto, id: pago?.id || Date.now() };
    onGuardar(tipo, datos);
    onCerrar();
  };

  return (
    <div className="modal">
      <h3>{modo === 'crear' ? 'Nuevo Pago' : 'Editar Pago'}</h3>
      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <input
        type="number"
        placeholder="Monto"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
      />
      <button onClick={manejarGuardar}>Guardar</button>
      <button onClick={onCerrar}>Cancelar</button>
    </div>
  );
}
