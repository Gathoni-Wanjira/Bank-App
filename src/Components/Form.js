import React, { useState } from 'react'

function Form({transactionData,updateTransactions}) {

const [date, setDateNow] = useState('');
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
        date: date,
        description: description,
        category: category,
        amount: amount
        
    }
    updateTransactions ([...transactionData,transactionAdded])
    resetForm()
}

function resetForm () {
    setDateNow("")
    setDescription("")
    setCategory("")
    setAmount("")
}



  return (

    <div>
        <div className='form-heading'>
            <h3>ADD TRANSACTION</h3>
        </div>
        <form className='AdditionalForm' >
            <input  required value = {date} type='date' onChange={handleDate} />
            <br />
            <input  required value = {description} placeholder='Description' onChange={handleDescription}/>
            <br />
            <input required value = {category} placeholder='Category' onChange={handleCategory}/>
            <br />
            <input required value = {amount}  placeholder='Amount' onChange={handleAmount} />
            <br />
            <button className='submit-form' onClick={handleSubmit}>SUBMIT</button>
        </form>
    </div>
  )
}

export default Form;
