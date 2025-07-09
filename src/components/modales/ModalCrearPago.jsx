import React from 'react';
import FormularioPagoDian from '../formularios/FormularioPagoDian';
import FormularioPagoBanco from '../formularios/FormularioPagoBanco';

export default function ModalCrearPago({ tipo, modo, pago, onGuardar, onCerrar }) {
  const handleSubmit = (datos) => {

    const datosFinales = modo === 'editar'
      ? { ...datos, id: pago.id }    
      : { ...datos, id: Date.now() };

    onGuardar(tipo, datosFinales);
    onCerrar();
  };

  return (
    <div className="modal">
      <h2>{modo === 'editar' ? 'Editar' : 'Crear'} pago: {tipo === 'dian' ? 'DIAN' : 'Banco'}</h2>

      {tipo === 'dian' ? (
        <FormularioPagoDian pago={pago} onSubmit={handleSubmit} />
      ) : (
        <FormularioPagoBanco pago={pago} onSubmit={handleSubmit} />
      )}

      <button onClick={onCerrar}>Cancelar</button>
    </div>
  );
}
