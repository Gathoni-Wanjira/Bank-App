import React, { useEffect, useState } from "react";
import './App.css';
import Table from './Components/Table';
import Form from "./Components/Form";
import Search from "./Components/Search";


function App() {

    const [transactionData, setTransactionData] = useState([])

    useEffect(() => {
        console.log("Test useeffect")

        fetch("http://localhost:3000/transactions")
            .then(response => response.json())
            .then(transaction => {
                console.log(transaction)
                setTransactionData(transaction);
            })
    }, [])




    return (
        <div className="App">
            <Form updateTransactions={setTransactionData} transactionData={transactionData} />
            <h3 className='transactions-heading'>BANK TRANSACTIONS</h3>
            <Search />
            <Table dataResults={transactionData} />

        </div>
    );
}

export default App;
