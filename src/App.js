import React from 'react';
import SimpleLineChart from './SimpleLineChart';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import TradeHistory from './TradeHistory';

const App = () => {
  return (
    <div style={{ backgroundColor: '#F5F5F5', padding: '20px', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <Sidebar style={{ flex: '0 0 200px' }} />
        <div style={{ flex: '1', marginLeft: '20px' }}>
          <h3>Good Morning, Thomas!</h3>
          <SimpleLineChart />
          <TradeHistory/>
        </div>
      </div>
    </div>
  );
};

export default App;
