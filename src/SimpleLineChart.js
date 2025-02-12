import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const SimpleLineChart = () => (
  <div>
    <h2>Dashboard</h2>
    <div style={{ display: 'flex' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '20px' }}>
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={3} />
        </LineChart>
      </div>
      <div style={{ backgroundColor: 'white', padding: '20px', marginLeft: '20px', borderRadius: '20px' }}>
        <h3>Details</h3>
        <p>Status: Active</p>
        <p>Start: 2024-05-01</p>
        <p>End: 2024-05-10</p>
        <p>Platform: XYZ Platform</p>
        <p>Last Updated: 2024-05-10 10:00 AM</p>
      </div>
    </div>
  </div>
);

export default SimpleLineChart;
