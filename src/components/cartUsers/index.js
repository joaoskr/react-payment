import React from "react";

import "./style.css";

export default function CartUser({ user, clickFunction }) {
  return (
    <div className="user" key={user.id}>
      <img src={user.img} alt={user.name} />
      <div className="info-wrapper">
        <div className="user-name">{user.name}</div>
        <div className="user-id-username">
          ID: {user.id} - Username: {user.username}
        </div>
      </div>
      <button type="button" className="pay-button" onClick={() => clickFunction(user)}>
        Pagar
      </button>
    </div>
  );
}
