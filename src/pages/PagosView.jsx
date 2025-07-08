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
      {/* Tarjeta para Pagos a Bancos */}
      <CardPago
        titulo="Pagos a Bancos"
        tipo="bancos"
        pagos={pagos.bancos}
        onCrear={(tipo) => { setTipoModal(tipo); setModo('crear'); setPagoActual(null); }}
        onVer={(tipo) => setMostrarLista(tipo)}
      />

      {/* Tarjeta para Pagos a DIAN */}
      <CardPago
        titulo="Pagos a DIAN"
        tipo="dian"
        pagos={pagos.dian}
        onCrear={(tipo) => { setTipoModal(tipo); setModo('crear'); setPagoActual(null); }}
        onVer={(tipo) => setMostrarLista(tipo)}
      />

      {/* Renderizado condicional del ModalPago y su fondo */}
      {tipoModal && (
        <> {/* Un Fragment (<>) se usa para retornar múltiples elementos sin añadir un div extra al DOM */}
          <div className="modal-backdrop"></div> {/* Este es el fondo oscuro */}
          <ModalPago
            tipo={tipoModal}
            modo={modo}
            pago={pagoActual}
            onGuardar={modo === 'crear' ? agregarPago : editarPago}
            onCerrar={() => setTipoModal(null)}
          />
        </>
      )}

      {/* Renderizado condicional de la ListaPagos */}
      {mostrarLista && (
        <ListaPagos
          tipo={mostrarLista}
          pagos={pagos[mostrarLista]}
          onEditar={(pago) => {
            setPagoActual(pago);
            setModo('editar');
            setTipoModal(mostrarLista); // Al editar desde la lista, también abrimos el modal
          }}
          onEliminar={eliminarPago}
          onCerrar={() => setMostrarLista(null)}
        />
      )}
    </div>
  );
}