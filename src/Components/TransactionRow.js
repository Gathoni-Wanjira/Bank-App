import React from "react";

function TransactionRow({
  date,
  description,
  category,
  amount,
  handleDelete,
  id,
}) {

    function handleClick (e) {
        handleDelete(id);
    }
  return (
    <tr className="data">
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button onClick = {handleClick} className="delete-form">Delete</button>
      </td>
    </tr>
  );
}

export default TransactionRow;
