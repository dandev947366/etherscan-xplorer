import React from 'react'

const Stat2 = () => {
  return (
    <div className="stats bg-blue-300 text-gray-800">
  
  <div className="stat">
    <div className="stat-title text-gray-800">Account balance</div>
    <div className="stat-value">$89,400</div>
    <div className="stat-actions">
      <button className="btn btn-sm btn-success">Add funds</button>
    </div>
  </div>
  
  <div className="stat">
    <div className="stat-title text-gray-800">Current balance</div>
    <div className="stat-value">$89,400</div>
    <div className="stat-actions">
      <button className="btn btn-sm mr-1">Withdrawal</button> 
      <button className="btn btn-sm">Deposit</button>
    </div>
  </div>
  
</div>
  )
}

export default Stat2