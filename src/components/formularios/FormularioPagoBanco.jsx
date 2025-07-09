import React, { useState, useEffect } from 'react';

export default function FormularioPagoBanco({ onSubmit, pago }) {
  const [form, setForm] = useState({
    beneficiario: '',
    cuenta: '',
    tipoCuenta: '',
    banco: '',
    monto: '',
    fecha: '',
    referencia: '',
    metodo: '',
  });
  


  useEffect(() => {
    if (pago) {
      setForm(pago);
    }
  }, [pago]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGuardar = () => {
    // Validar campos obligatorios
    if (
      !form.beneficiario ||
      !form.cuenta ||
      !form.tipoCuenta ||
      !form.banco ||
      !form.monto ||
      !form.fecha ||
      !form.metodo
    ) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }
  
    onSubmit(form); // Solo si pasa la validación
  };
  

  return (
    <div>
      <label>Nombre del beneficiario:</label>
      <input name="beneficiario" value={form.beneficiario} onChange={handleChange} />

      <label>Número de cuenta:</label>
      <input name="cuenta" value={form.cuenta} onChange={handleChange} />

      <label>Tipo de cuenta:</label>
      <select name="tipoCuenta" value={form.tipoCuenta} onChange={handleChange}>
        <option value="">Seleccione</option>
        <option>Ahorros</option>
        <option>Corriente</option>
      </select>

      <label>Banco:</label>
      <select name="banco" value={form.banco} onChange={handleChange}>
        <option value="">Seleccione</option>
        <option>Bancolombia</option>
        <option>Davivienda</option>
        <option>BBVA</option>
      </select>

      <label>Monto a pagar:</label>
      <input type="number" name="monto" step="0.01" value={form.monto} onChange={handleChange} />

      <label>Fecha de pago:</label>
      <input type="date" name="fecha" value={form.fecha} onChange={handleChange} />

      <label>Referencia o factura:</label>
      <input name="referencia" value={form.referencia} onChange={handleChange} />

      <label>Método de pago:</label>
      <select name="metodo" value={form.metodo} onChange={handleChange}>
        <option value="">Seleccione</option>
        <option>Transferencia</option>
        <option>PSE</option>
        <option>Efectivo</option>
      </select>

      <button onClick={handleGuardar}>Guardar</button>
    </div>
  );
}
