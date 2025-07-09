import React, { useState, useEffect } from 'react';

export default function FormularioPagoDian({ onSubmit, pago }) {
  const [form, setForm] = useState({
    tipoImpuesto: '',
    periodo: '',
    referencia: '',
    valor: '',
    fecha: '',
    metodo: '',
    comprobante: '',
  });

  // Cargar datos al editar
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
      !form.tipoImpuesto ||
      !form.periodo ||
      !form.valor ||
      !form.fecha ||
      !form.metodo
    ) {
      alert('Faltan campos obligatorios');
      return;
    }
  
    onSubmit(form); // Solo si pasa la validación
  };
  

  return (
    <div>
      <label>Tipo de impuesto:</label>
      <select name="tipoImpuesto" onChange={handleChange} value={form.tipoImpuesto}>
        <option value="">Seleccione</option>
        <option>IVA</option>
        <option>Renta</option>
        <option>Retefuente</option>
        <option>Anticipada</option>
        <option>Otros</option>
      </select>

      <label>Periodo gravable:</label>
      <input name="periodo" value={form.periodo} onChange={handleChange} />

      <label>Número de referencia:</label>
      <input name="referencia" value={form.referencia} onChange={handleChange} />

      <label>Valor a pagar:</label>
      <input type="number" name="valor" step="0.01" value={form.valor} onChange={handleChange} />

      <label>Fecha de pago:</label>
      <input type="date" name="fecha" value={form.fecha} onChange={handleChange} />

      <label>Método de pago:</label>
      <select name="metodo" value={form.metodo} onChange={handleChange}>
        <option value="">Seleccione</option>
        <option>PSE</option>
        <option>Banco</option>
        <option>Consignación</option>
        <option>Débito automático</option>
      </select>

      <label>Comprobante de pago:</label>
      <input name="comprobante" value={form.comprobante} onChange={handleChange} />

      <button onClick={handleGuardar}>Guardar</button>
    </div>
  );
}
