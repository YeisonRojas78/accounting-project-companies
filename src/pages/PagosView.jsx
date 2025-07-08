import React, { useState } from 'react';
import { usePagos } from '../hooks/usePagos';
import CardPago from '../components/CardPago';
import ModalCrearPago from '../components/modales/ModalCrearPago';
import ListaPagos from '../components/ListaPagos';

export default function PagosView() {
  const { pagos, agregarPago, editarPago, eliminarPago } = usePagos();
  const [tipoModal, setTipoModal] = useState(null); // 'bancos' o 'dian'
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
        onCrear={(tipo) => {
          setTipoModal(tipo);
          setModo('crear');
          setPagoActual(null);
        }}
        onVer={(tipo) => setMostrarLista(tipo)}
      />

      {/* Tarjeta para Pagos a DIAN */}
      <CardPago
        titulo="Pagos a DIAN"
        tipo="dian"
        pagos={pagos.dian}
        onCrear={(tipo) => {
          setTipoModal(tipo);
          setModo('crear');
          setPagoActual(null);
        }}
        onVer={(tipo) => setMostrarLista(tipo)}
      />

      {/* Renderizado condicional del ModalCrearPago */}
      {tipoModal && (
        <>
          <div className="modal-backdrop"></div>
          <ModalCrearPago
            tipo={tipoModal}
            onGuardar={modo === 'crear' ? agregarPago : editarPago}
            onCerrar={() => {
              setTipoModal(null);
              setPagoActual(null);
              setModo('crear');
            }}
            pago={pagoActual}
          />
        </>
      )}

      {/* Renderizado condicional de ListaPagos */}
      {mostrarLista && (
        <ListaPagos
          tipo={mostrarLista}
          pagos={pagos[mostrarLista]}
          onEditar={(pago) => {
            setPagoActual(pago);
            setModo('editar');
            setTipoModal(mostrarLista); // abrir modal en modo editar
          }}
          onEliminar={eliminarPago}
          onCerrar={() => setMostrarLista(null)}
        />
      )}
    </div>
  );
}