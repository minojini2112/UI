//Timeline Graph: Visual representation of engagement and reach over time.
//Budget Utilization Chart: Breakdown of how the budget is being spent over different periods.
//Conversion Funnel: Visualization of how users are interacting from impression to conversion.

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

const Performance = () => {
  // Sample data for the charts
  const timelineData = [
    { date: '2024-10-01', engagement: 120, reach: 300 },
    { date: '2024-10-02', engagement: 200, reach: 450 },
    { date: '2024-10-03', engagement: 150, reach: 400 },
    { date: '2024-10-04', engagement: 300, reach: 600 },
    { date: '2024-10-05', engagement: 250, reach: 500 },
  ];

  /*const budgetUtilizationData = [
    { name: 'Platform A', value: 400 },
    { name: 'Platform B', value: 300 },
    { name: 'Platform C', value: 300 },
    { name: 'Platform D', value: 200 },
  ];*/

  const conversionFunnelData = [
    { name: 'Impressions', value: 1000 },
    { name: 'Clicks', value: 700 },
    { name: 'Conversions', value: 400 },
  ];

  return (
    <Box sx={{ mt: 4, p: 2, bgcolor: '#ffffff', borderRadius: '8px', boxShadow: 3 }}>
      <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
        Performance Graphs and Charts
      </Typography>

      {/* Timeline Graph */}
      <Typography variant="h6" gutterBottom>
        Timeline Graph
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={timelineData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="engagement" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="reach" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

      {/* Budget Utilization Chart 
      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Budget Utilization Chart
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={budgetUtilizationData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
            {budgetUtilizationData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.name === 'Platform A' ? '#ff8042' : '#0088FE'} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>*/}

      {/* Conversion Funnel */}
      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Conversion Funnel
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={conversionFunnelData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            fill="#82ca9d"
            label
          >
            {conversionFunnelData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === 0 ? '#ff8042' : index === 1 ? '#0088FE' : '#00C49F'} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Performance;
