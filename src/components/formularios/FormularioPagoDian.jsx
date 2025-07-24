import React, { useState, useEffect } from "react";

export default function FormularioPagoDian({ onSubmit, pago, usuarioId }) {
  const [form, setForm] = useState({
    tipoImpuesto: "",
    NumeroReferencia: "",
    MontoTotal: "",
    FechaPago: "",
    metodoPago: "",
    ComprobantePago: "",
  });

  // Cargar datos al editar
  useEffect(() => {
    if (pago) {
      setForm({
        tipoImpuesto: pago.tipoImpuesto || "",
        NumeroReferencia: pago.NumeroReferencia || "",
        MontoTotal: pago.MontoTotal || "",
        FechaPago: pago.FechaPago?.split("T")[0] || "",
        metodoPago: pago.metodoPago || "",
        ComprobantePago: pago.ComprobantePago || "",
      });
    }
  }, [pago]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGuardar = () => {
    if (
      !form.tipoImpuesto ||
      !form.NumeroReferencia ||
      !form.MontoTotal ||
      !form.FechaPago ||
      !form.metodoPago
    ) {
      alert("Faltan campos obligatorios");
      return;
    }

    const datos = {
      ...form,
      MontoTotal: parseFloat(form.MontoTotal),
      FechaPago: new Date(form.FechaPago),
      usuarioId: usuarioId || 1, // ⚠️ Asegúrate de pasar un ID válido
    };

    onSubmit(datos);
  };

  return (
    <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
      <label>Tipo de impuesto:</label>
      <select name="tipoImpuesto" onChange={handleChange} value={form.tipoImpuesto}>
        <option value="">Seleccione</option>
        <option value="IVA">IVA</option>
        <option value="Renta">Renta</option>
        <option value="Retefuente">Retefuente</option>
        <option value="Anticipada">Anticipada</option>
        <option value="Otros">Otros</option>
      </select>

      <label>Número de referencia:</label>
      <input
        name="NumeroReferencia"
        value={form.NumeroReferencia}
        onChange={handleChange}
      />

      <label>Monto total:</label>
      <input
        type="number"
        step="0.01"
        name="MontoTotal"
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

      <label>Método de pago:</label>
      <select name="metodoPago" value={form.metodoPago} onChange={handleChange}>
        <option value="">Seleccione</option>
        <option value="PSE">PSE</option>
        <option value="Banco">Banco</option>
        <option value="Consignación">Consignación</option>
        <option value="Débito automático">Débito automático</option>
      </select>

      <label>Comprobante de pago:</label>
      <input
        name="ComprobantePago"
        value={form.ComprobantePago}
        onChange={handleChange}
      />

      <div className="btns">
        <button type="button" className="btn-guardar" onClick={handleGuardar}>
          Guardar
        </button>
      </div>
    </form>
  );
}
