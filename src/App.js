// src/App.js
import React from 'react';
import './App.css'; 

const App = () => {
  // List of top 10 countries with detailed information
  const countries = [
    {
      name: 'United States',
      population: '331 million',
      currency: 'USD',
      capital: 'Washington, D.C.',
      gdp: '$21 trillion',
      language: 'English',
    },
    {
      name: 'China',
      population: '1.4 billion',
      currency: 'CNY',
      capital: 'Beijing',
      gdp: '$14 trillion',
      language: 'Mandarin',
    },
    {
      name: 'India',
      population: '1.3 billion',
      currency: 'INR',
      capital: 'New Delhi',
      gdp: '$2.9 trillion',
      language: 'Hindi, English',
    },
    {
      name: 'Brazil',
      population: '211 million',
      currency: 'BRL',
      capital: 'Brasília',
      gdp: '$2 trillion',
      language: 'Portuguese',
    },
    {
      name: 'Germany',
      population: '83 million',
      currency: 'EUR',
      capital: 'Berlin',
      gdp: '$3.8 trillion',
      language: 'German',
    },
    {
      name: 'United Kingdom',
      population: '67 million',
      currency: 'GBP',
      capital: 'London',
      gdp: '$2.8 trillion',
      language: 'English',
    },
    {
      name: 'France',
      population: '65 million',
      currency: 'EUR',
      capital: 'Paris',
      gdp: '$2.7 trillion',
      language: 'French',
    },
    {
      name: 'Italy',
      population: '60 million',
      currency: 'EUR',
      capital: 'Rome',
      gdp: '$2 trillion',
      language: 'Italian',
    },
    {
      name: 'Canada',
      population: '38 million',
      currency: 'CAD',
      capital: 'Ottawa',
      gdp: '$1.8 trillion',
      language: 'English, French',
    },
    {
      name: 'Australia',
      population: '25 million',
      currency: 'AUD',
      capital: 'Canberra',
      gdp: '$1.4 trillion',
      language: 'English',
    },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>My World</h1>
      <h2>Top 10 Countries</h2>
      <ul>
        {countries.map((country, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>
            <h3>{country.name}</h3>
            <p><strong>Population:</strong> {country.population}</p>
            <p><strong>Currency:</strong> {country.currency}</p>
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>GDP:</strong> {country.gdp}</p>
            <p><strong>Language:</strong> {country.language}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
