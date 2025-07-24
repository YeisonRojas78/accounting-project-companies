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
              <th>Método</th>
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
                <td>{pago.tipoImpuesto?.nombre || '---'}</td>
                <td>{pago.periodo || '---'}</td>
                <td>${pago.valor?.toLocaleString() || 0}</td>
                <td>{pago.fecha || '---'}</td>
                <td>{pago.metodoPago?.nombre || '---'}</td>
              </>
            ) : (
              <>
                <td>{pago.nombreBeneficiario || '---'}</td>
                <td>{pago.numeroCuenta || '---'}</td>
                <td>{pago.banco?.nombre || '---'}</td>
                <td>{pago.metodoPago?.nombre || '---'}</td>
                <td>${pago.monto?.toLocaleString() || 0}</td>
                <td>{pago.fecha || '---'}</td>
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
