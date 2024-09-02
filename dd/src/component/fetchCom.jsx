import React, { useState, useEffect } from 'react';

const DataFetchingComponent = () => {
  // State variables
  const [data, setData] = useState(null); // Data from API
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Effect hook to fetch data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/upload',{
            method:'POST',
            headers:{
                'Content-type':'application/json',
            },body: JSON.stringify({
                
            })
        })
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result); // Set data to state
      } catch (error) {
        setError(error); // Set error to state
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array means this effect runs once after initial render

  // Conditional rendering based on the state
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Ensure data is defined and has the expected structure
  if (!data || !data.data) return <p>No data available</p>;

  return (
   <>
    <div>
      <h1>Data from API:</h1>
      {data.data.map((up, index) => (
        <div className="shape">
              <h3>{up['id']}</h3> 
              <h2>{up['upload_name']}</h2>
        </div>
      ))}
    </div>
   </>
  );
};

export default DataFetchingComponent;
