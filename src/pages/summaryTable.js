import React, {useState, useEffect} from 'react'
import Header from '../components/header'
import SummaryTable from '../components/summary-table'
import Grid from '@mui/material/Grid'

const Table = () =>   {
    const [users, setUsers] = useState([]);
    const [response, setResponse] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3050/users/summary_table')
            .then(response => response.json())
            .then(data => {
              if (data.code === 200) {
                setUsers(data.result)
              }
            });
      }, []);

  return (
    <div className="App">
      <div >
        <Header />
      </div >
        <Grid
          container justify="center" direction="column"
          alignItems="center"
        >
          <Grid
            container justify="center"
            alignItems="center"
            style={{ minHeight: "90vh", width:"30%"}}>
            <SummaryTable users={users} />
          </Grid >
        </Grid>
    </div>
  );
}

export default Table;