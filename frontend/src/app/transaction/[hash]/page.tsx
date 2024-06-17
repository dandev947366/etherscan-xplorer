import React from "react";
import "dotenv/config";
const getTxReceipt = async (hash) => {
  const res = await fetch(process.env.INFURA_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_getTransactionReceipt",
      params: [hash],
      id: 1
    })
  });
  const resJson = await res.json();
  return resJson.result;
};

export default async TransactionPage({ params }) {
    const receipt = await getTxReceipt(params.hash)
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Transactions</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>{params.hash}</td>
            <td>{receipt.status}</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
