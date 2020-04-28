import React from "react";

import "./style.css";

export default function AlertModal({ state }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="title">Recibo de pagamento</div>
        <div className="content">
          O pagamento <strong>{state ? 'foi' : 'não foi'}</strong> concluido com sucesso.
        </div>
      </div>
    </div>
  );
}
