import React from 'react';

export default function TablaPagos({ tipo, pagos, onEditar, onEliminar }) {
  return (
    <table className="tabla-pagos">
      <thead>
        <tr>
          {tipo === 'dian' ? (
            <>
              <th>Tipo Impuesto</th>
              <th>Periodo</th>
              <th>Valor</th>
              <th>Fecha</th>
              <th>Método</th>
              <th>Acciones</th>
            </>
          ) : (
            <>
              <th>Beneficiario</th>
              <th>Cuenta</th>
              <th>Banco</th>
              <th>Monto</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {pagos.map((pago) => (
          <tr key={pago.id}>
            {tipo === 'dian' ? (
              <>
                <td>{pago.tipoImpuesto}</td>
                <td>{pago.periodo}</td>
                <td>${pago.valor}</td>
                <td>{pago.fecha}</td>
                <td>{pago.metodo}</td>
              </>
            ) : (
              <>
                <td>{pago.beneficiario}</td>
                <td>{pago.cuenta}</td>
                <td>{pago.banco}</td>
                <td>${pago.monto}</td>
                <td>{pago.fecha}</td>
              </>
            )}
            <td>
              <button onClick={() => onEditar(pago)}>Editar</button>
              <button onClick={() => onEliminar(tipo, pago.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
