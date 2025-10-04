// pages/charts/YearCharts.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const YearCharts = () => {
  const { year } = useParams();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">SAR Данные за {year} год</h1>
      <p>Данные для года: {year}</p>
    </div>
  );
};

export default YearCharts;