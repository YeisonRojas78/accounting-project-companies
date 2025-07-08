import React, { useState } from 'react';
import { usePagos } from '../hooks/usePagos';
import CardPago from '../components/CardPago';
import ModalPago from '../components/modales/ModalPago';
import ListaPagos from '../components/ListaPagos';

export default function PagosView() {
  const { pagos, agregarPago, editarPago, eliminarPago } = usePagos();
  const [tipoModal, setTipoModal] = useState(null);
  const [modo, setModo] = useState('crear');
  const [pagoActual, setPagoActual] = useState(null);
  const [mostrarLista, setMostrarLista] = useState(null);

  return (
    <div className="pagos-view">
      <CardPago titulo="Pagos a Bancos" tipo="bancos" pagos={pagos.bancos}
        onCrear={(tipo) => { setTipoModal(tipo); setModo('crear'); setPagoActual(null); }}
        onVer={(tipo) => setMostrarLista(tipo)}
      />

      <CardPago titulo="Pagos a DIAN" tipo="dian" pagos={pagos.dian}
        onCrear={(tipo) => { setTipoModal(tipo); setModo('crear'); setPagoActual(null); }}
        onVer={(tipo) => setMostrarLista(tipo)}
      />

      {tipoModal && (
        <ModalPago
          tipo={tipoModal}
          modo={modo}
          pago={pagoActual}
          onGuardar={modo === 'crear' ? agregarPago : editarPago}
          onCerrar={() => setTipoModal(null)}
        />
      )}

      {mostrarLista && (
        <ListaPagos
          tipo={mostrarLista}
          pagos={pagos[mostrarLista]}
          onEditar={(pago) => {
            setPagoActual(pago);
            setModo('editar');
            setTipoModal(mostrarLista);
          }}
          onEliminar={eliminarPago}
          onCerrar={() => setMostrarLista(null)}
        />
      )}
    </div>
  );
}
