import React from 'react'
import TransactionRow from './TransactionRow';

function Table({ dataResults }) {
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

                    return <TransactionRow date={result.date} description={result.description} category={result.category} amount={result.amount} />


                })}
            </table>





        </div>



    )
}

export default Table;
