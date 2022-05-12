import React from 'react'
import "./charts.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  // ResponsiveContainer,
} from "recharts";

const data = [
  {
    Month: 'January', Amount: 10000,
  },
  {
    Month: 'February', Amount: 50000,
  },
  {
    Month: 'March', Amount: 35000,
  },
  {
    Month: 'April', Amount: 45000,
  },
  {
    Month: 'May', Amount: 5000,
  },
  {
    Month: 'June', Amount: 0,
  },
];

const Charts = () => {
  return (
    <div className="chart">
      <div className="title">Donor Donations for the year 2022</div>
      <AreaChart
        width={730}
        height={450}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="Month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Amount"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
  );
};
export default Charts;