import React, { useEffect, useState } from "react";

import "./style.css";

export default function PaymentModal({ userToPay, hidden, paymentClick }) {
  let cards = [
    // valid card
    {
      card_number: "1111111111111111",
      cvv: 789,
      expiry_date: "01/18"
    },
    // invalid card
    {
      card_number: "4111111111111234",
      cvv: 123,
      expiry_date: "01/20"
    }
  ];

  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(userToPay);
  }, [userToPay]);

  return (
    <div className={hidden ? 'modal-backdrop hidden' : 'modal-backdrop'}>
      <div className="modal">
        <div className="title">
          Pagamento para <span>{user.name}</span>
        </div>

        <div className="content">
          <input type="number" placeholder="R$ 0,00" />

          <div className="cards">
            <select>
              {cards &&
                cards.map(card => (
                  <option key={card.card_number} value={card.card_number}>
                    Cartão com final {card.card_number.slice(-3)}
                  </option>
                ))}
            </select>
          </div>

          <button type="button" className="pay-button" onClick={() => paymentClick()}>
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
}
