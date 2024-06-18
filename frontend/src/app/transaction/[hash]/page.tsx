



const TransactionPage = () => {
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
            <td>test</td>
            <td>
              {1===1 ? (
                <div className="badge badge-accent badge-outline">Success</div>
              ) : (
                <div className="badge badge-secondary badge-outline">Failure</div>
              )}
            </td>
            <td>test</td>
          </tr>
          {/* Additional rows can be added as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionPage;
