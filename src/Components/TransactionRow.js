import React from 'react'

function TransactionRow(props) {
    return (
        
          <tr className='data'>
                    <td>{props.date}</td>
                    <td>{props.description}</td>
                    <td>{props.category}</td>
                    <td>{props.amount}</td>
                    <td><button className='delete-form'>Delete</button></td>
                </tr>

        
    )
}

export default TransactionRow;