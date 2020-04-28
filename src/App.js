import React, { useEffect, useState } from "react";
import "./styles.css";

import api from "./services/api";

import CartUser from "./components/cartUsers";
import PaymentModal from "./components/paymentModal";
import AlertModal from "./components/alertModal";

export default function App() {
  const [users, setUsers] = useState([]);
  const [userToPay, setUserToPay] = useState();
  const [modalState, setModalState] = useState(true);
  const [transactionState, setTransactionState] = useState();

  useEffect(() => {
    async function getUsers() {
      const response = await api.get("/5d531c4f2e0000620081ddce");

      setUsers(response.data);
    }

    getUsers();
  }, []);

  function openPayment(user){
    setUserToPay(user);
    setModalState(false);
  }

  async function makePayment(){
    const response = await api.get('/5d542ec72f000048248614b3');
    
    setTransactionState(response.data);
    console.log(response.data);
    setModalState(true);
  }

  return (
    <div className="App">
      <div className="users">
        {users && users.map(user => <CartUser user={user} clickFunction={openPayment} />)}
      </div>
      {userToPay && <PaymentModal userToPay={userToPay} hidden={modalState} paymentClick={makePayment} />}
      {transactionState && <AlertModal state={transactionState.transaction.success} />}
    </div>
  );
}
