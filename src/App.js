import React, { useEffect, useState } from "react";
import './App.css';
import Table from './Components/Table';
import Form from "./Components/Form";
import Search from "./Components/Search";


function App() {

    const [transactionData, setTransactionData] = useState([])
    const [searchTransactionData, setSearchTransactionData] = useState([])
    const [text, setText] = useState("")

    useEffect(() => {
        console.log("Test useeffect")

        fetch("http://localhost:4000/transactions")
            .then(response => response.json())
            .then(transaction => {
                console.log(transaction)
                setTransactionData(transaction);
                setSearchTransactionData(transaction)
            })
    }, [])

    function handleSearch(search) {
        console.log(search)
        setText(search)
        setSearchTransactionData([...transactionData].filter((transaction) => {
            return transaction.description.includes(search) 
        }))
    }

    function handleDelete (id) {
        setTransactionData(transactionData.filter(transaction => {
            return transaction.id !== id 

        }))
        

    }



    return (
        <div className="App">
            <nav><p>BANK TRANSACTION APP</p></nav>
            <Form updateTransactions={setTransactionData} transactionData={transactionData} />
            <h3 className='transactions-heading'>Bank Transactions</h3>
            <Search handleSearch={handleSearch} />
            <Table handleDelete = {handleDelete} dataResults={(text.length > 0) ? searchTransactionData : transactionData} />

        </div>
    );
}

export default App;
