import React from 'react'
import TransactionRow from './TransactionRow';

function Table({ dataResults, handleDelete}) {
    console.log(dataResults);
    return (

        <div className='allTable'>

            <table>

                <tr className='Heading'>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th></th>
                </tr>


                {dataResults.map(result => {
                    console.log(result);

                    return <TransactionRow key = {result.id} id = {result.id} handleDelete = {handleDelete} date={result.date} description={result.description} category={result.category} amount={result.amount} />


                })}
            </table>





        </div>



    )
}

export default Table;
