import React from 'react';

export default function TablaPagos({ tipo, pagos, onEditar, onEliminar }) {
  return (
    <table className="tabla-pagos">
      <thead>
        <tr>
          {tipo === 'dian' ? (
            <>
              <th>Referencia</th>
              <th>Valor</th>
              <th>Fecha</th>
              <th>Impuesto</th>
              <th>Método</th>
              <th>Comprobante</th>
              <th>Acciones</th>
            </>
          ) : (
            <>
              <th>Beneficiario</th>
              <th>Cuenta</th>
              <th>Banco</th>
              <th>Método</th>
              <th>Monto</th>
              <th>Referencia</th>
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
                <td>{pago.NumeroReferencia}</td>
                <td>${pago.MontoTotal?.toLocaleString() || 0}</td>
                <td>{new Date(pago.FechaPago).toLocaleDateString()}</td>
                <td>{pago.tipoImpuesto || '---'}</td>
                <td>{pago.metodoPago || '---'}</td>
                <td>{pago.ComprobantePago || '---'}</td>
              </>
            ) : (
              <>
                <td>{pago.NombreBeneficiario || '---'}</td>
                <td>{pago.NumeroCuenta || '---'}</td>
                <td>{pago.banco || '---'}</td>
                <td>{pago.metodoPago || '---'}</td>
                <td>${pago.MontoTotal?.toLocaleString() || 0}</td>
                <td>{pago.ReferenciaPago || '---'}</td>
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
