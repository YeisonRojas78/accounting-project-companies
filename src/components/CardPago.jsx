
export default function CardPago({ titulo, tipo, pagos, onCrear, onVer }) {
  return (
    <div className="card">
      <h3>{titulo}</h3>
      <p>Pagos realizados: {pagos.length}</p>

      <div className="botones">
        <button className="btn-crear" onClick={() => onCrear(tipo)}>Crear Pago</button>
        <button className="btn-ver" onClick={() => onVer(tipo)}>Ver Pagos</button>
      </div>
    </div>
  );
}

