import React, { useState, useEffect } from 'react';

export default function FormularioPagoBanco({ onSubmit, pago, usuarioId }) {
  const [form, setForm] = useState({
    NombreBeneficiario: '',
    NumeroCuenta: '',
    tipoCuenta: '',
    banco: '',
    MontoTotal: '',
    FechaPago: '',
    ReferenciaPago: '',
    metodoPago: '',
  });

  // Cargar datos al editar
  useEffect(() => {
    if (pago) {
      setForm({
        NombreBeneficiario: pago.NombreBeneficiario || '',
        NumeroCuenta: pago.NumeroCuenta || '',
        tipoCuenta: pago.tipoCuenta || '',
        banco: pago.banco || '',
        MontoTotal: pago.MontoTotal || '',
        FechaPago: pago.FechaPago?.split('T')[0] || '',
        ReferenciaPago: pago.ReferenciaPago || '',
        metodoPago: pago.metodoPago || '',
      });
    }
  }, [pago]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGuardar = () => {
    if (
      !form.NombreBeneficiario ||
      !form.NumeroCuenta ||
      !form.tipoCuenta ||
      !form.banco ||
      !form.MontoTotal ||
      !form.FechaPago ||
      !form.ReferenciaPago ||
      !form.metodoPago
    ) {
      alert('Faltan campos obligatorios');
      return;
    }
    if (parseFloat(form.MontoTotal) < 0) {
      alert('El monto no puede ser negativo');
      return;
    }

    const datos = {
      ...form,
      MontoTotal: parseFloat(form.MontoTotal),
      FechaPago: new Date(form.FechaPago),
      usuarioId: usuarioId || 1, // ⚠️ Asegúrate de pasar un usuario válido
    };

    onSubmit(datos);
  };

  return (
    <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
      <label>Nombre del beneficiario:</label>
      <input
        name="NombreBeneficiario"
        value={form.NombreBeneficiario}
        onChange={handleChange}
      />

      <label>Número de cuenta:</label>
      <input
        name="NumeroCuenta"
        value={form.NumeroCuenta}
        onChange={handleChange}
      />

      <label>Tipo de cuenta:</label>
      <select name="tipoCuenta" value={form.tipoCuenta} onChange={handleChange}>
        <option value="">Seleccione</option>
        <option value="Ahorros">Ahorros</option>
        <option value="Corriente">Corriente</option>
      </select>

      <label>Banco:</label>
      <select name="banco" value={form.banco} onChange={handleChange}>
        <option value="">Seleccione</option>
        <option value="Bancolombia">Bancolombia</option>
        <option value="Davivienda">Davivienda</option>
        <option value="BBVA">BBVA</option>
      </select>

      <label>Monto a pagar:</label>
      <input
        type="number"
        name="MontoTotal"
        step="0.01"
        min="0"
        value={form.MontoTotal}
        onChange={handleChange}
      />

      <label>Fecha de pago:</label>
      <input
        type="date"
        name="FechaPago"
        value={form.FechaPago}
        onChange={handleChange}
      />

      <label>Referencia o factura:</label>
      <input
        name="ReferenciaPago"
        value={form.ReferenciaPago}
        onChange={handleChange}
      />

      <label>Método de pago:</label>
      <select name="metodoPago" value={form.metodoPago} onChange={handleChange}>
        <option value="">Seleccione</option>
        <option value="Transferencia">Transferencia</option>
        <option value="PSE">PSE</option>
        <option value="Efectivo">Efectivo</option>
      </select>

      <div className="btns">
        <button type="button" className="btn-guardar" onClick={handleGuardar}>
          Guardar
        </button>
      </div>
    </form>
  );
}
