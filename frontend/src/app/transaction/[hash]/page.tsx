import React from "react";
import "dotenv/config";

const infuraUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`

const getTxReceipt = async (hash:string) => {
  const res = await fetch(infuraUrl, {
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

const TransactionPage = async ({params}) => {
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
            <th>Block Number</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>{params.hash}</td>
            <td>{receipt.status=='0x1' ? <div className="badge badge-accent badge-outline">Success</div> : <div className="badge badge-secondary badge-outline">Failure</div>}</td>
            <td>{Number(receipt.blockNumber)}</td>
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
export default TransactionPage