import React from 'react';
import FormularioPagoDian from '../formularios/FormularioPagoDian';
import FormularioPagoBanco from '../formularios/FormularioPagoBanco';

export default function ModalCrearPago({ tipo, onGuardar, onCerrar }) {
  const handleSubmit = (datos) => {
    onGuardar(tipo, { ...datos, id: Date.now() });
    onCerrar();
  };

  return (
    <div className="modal">
      <h2>Crear pago: {tipo === 'dian' ? 'DIAN' : 'Banco'}</h2>
      {tipo === 'dian' ? (
        <FormularioPagoDian onSubmit={handleSubmit} />
      ) : (
        <FormularioPagoBanco onSubmit={handleSubmit} />
      )}
      <button onClick={onCerrar}>Cancelar</button>
    </div>
  );
}