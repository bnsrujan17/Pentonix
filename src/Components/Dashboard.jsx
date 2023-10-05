import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterOption, setFilterOption] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const token = sessionStorage.getItem('token') || localStorage.getItem('token');

  useEffect(() => {
    fetchData();
  }, [token]);

  const fetchData = async () => {
    
    try {
      const response = await axios.get('http://afc7a104784594208b12c3474fa3c924-1060237241.us-east-2.elb.amazonaws.com:9002/login', {
        headers: {
          Authorization: `Bearer ${token}`,
          body : {}
        },
      });
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  return (
    <div>
      <nav>
      </nav>
      <h1>Welcome</h1>
      <div>
        <select onChange={(e) => setFilterOption(e.target.value)}>
        </select>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <br />
      <br />
      <table border={1} cellPadding={0} cellSpacing={0}>
        
      </table>
    </div>
  );
};

export default Dashboard;
