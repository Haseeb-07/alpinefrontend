import React, { useState } from 'react';
import './TradeHistory.css'; // Import CSS for styling

const TradeHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5); // Number of items per page

  // Sample trade history data
  const tradeHistoryData = [
    { ticket: 1, open: '2024-05-01', close: '2024-05-02', action: 'Buy', openPrice: 100, closePrice: 110, sl: 95 },
    { ticket: 2, open: '2024-05-03', close: '2024-05-04', action: 'Sell', openPrice: 105, closePrice: 98, sl: 110 },
    { ticket: 1, open: '2024-05-01', close: '2024-05-02', action: 'Buy', openPrice: 100, closePrice: 110, sl: 95 },
    { ticket: 2, open: '2024-05-03', close: '2024-05-04', action: 'Sell', openPrice: 105, closePrice: 98, sl: 110 },
    { ticket: 1, open: '2024-05-01', close: '2024-05-02', action: 'Buy', openPrice: 100, closePrice: 110, sl: 95 },
    { ticket: 2, open: '2024-05-03', close: '2024-05-04', action: 'Sell', openPrice: 105, closePrice: 98, sl: 110 },
    { ticket: 1, open: '2024-05-01', close: '2024-05-02', action: 'Buy', openPrice: 100, closePrice: 110, sl: 95 },
    { ticket: 2, open: '2024-05-03', close: '2024-05-04', action: 'Sell', openPrice: 105, closePrice: 98, sl: 110 },
    // Add more sample trade history data as needed
  ];

  // Pagination
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentItems = tradeHistoryData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>Trade History</h2>
      <div className="trade-history-table-container">
        <table className="trade-history-table">
          <thead>
            <tr>
              <th>Ticket</th>
              <th>Open</th>
              <th>Close</th>
              <th>Action</th>
              <th>Open Price</th>
              <th>Close Price</th>
              <th>SL</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((trade, index) => (
              <tr key={index}>
                <td>{trade.ticket}</td>
                <td>{trade.open}</td>
                <td>{trade.close}</td>
                <td>{trade.action}</td>
                <td>{trade.openPrice}</td>
                <td>{trade.closePrice}</td>
                <td>{trade.sl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="pagination-container">
        {tradeHistoryData.length > perPage && (
          <ul className="pagination">
            {Array.from({ length: Math.ceil(tradeHistoryData.length / perPage) }, (_, i) => (
              <li key={i}>
                <button className={currentPage === i + 1 ? 'active' : ''} onClick={() => paginate(i + 1)}>{i + 1}</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TradeHistory;
