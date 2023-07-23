import React, { useState } from 'react'

function Form({transactionData,updateTransactions,setTransactionData}) {

const [date, setDateNow] = useState('2023-07-23');
const [description, setDescription] = useState("")
const [category, setCategory] = useState("")
const [amount, setAmount] = useState("")


function handleDate (e) {
    setDateNow(e.target.value)

}
function handleDescription (e) {
    setDescription(e.target.value)
    
}
function handleCategory (e) {
    setCategory(e.target.value)
    
}
function handleAmount (e) {
    setAmount(e.target.value)
    
}
function handleSubmit (e) {
    e.preventDefault();

    const transactionAdded = {
        date: "2022-07-09",
        description: "Office dinner sunday",
        category: "snacks",
        amount: "300",
        id: 14
    }
    props.updateTransactions (transactionAdded)
}



  return (

    <div>
        <div className='form-heading'>
            <h3>ADD TRANSACTION</h3>
        </div>
        <form className='AdditionalForm' >
            <input value = {date} type='date' onChange={handleDate} />
            <br />
            <input value = {description} placeholder='Description' onChange={handleDescription}/>
            <br />
            <input value = {category} placeholder='Category' onChange={handleCategory}/>
            <br />
            <input  value = {amount}  placeholder='Amount' onChange={handleAmount} />
            <br />
            <button className='submit-form' onClick={handleSubmit}>SUBMIT</button>
        </form>
    </div>
  )
}

export default Form;