import { Grid, Paper, TextField, Typography } from '@mui/material'
import Stack from '@mui/material/Stack';
import { Alert, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { getValue } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import React from 'react'

const Addd = () => {
  const { register, handleSubmit} = useForm();
  const createCourse=(val) => {
      alert('form submitted');
      axios.post("http://localhost:5000/course/create",val).then((res)=>{
        alert(`Course Successfully Created`);
      })
    }
    const paperStyle={padding:20,height:'40vh',width:280,margin:"20p"}

    
  return (
    <div>
       <Stack
      component="form"
      sx={{
        
        width: '25ch',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'200px'
        
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <Grid className='App'>
          <Paper elevation={15} style={paperStyle} className='col'>

          
       <h2>BLOG FORM</h2>
       <br></br>

      <br></br>
      <TextField
        name='BlogName'
        
        hiddenLabel
        id="filled-hidden-label-small"
        label='Blog Name'
        variant="outlined"

        
      />
      <br></br>
      <br></br>
      <TextField
      name='AuthorName'
      
        hiddenLabel
        id="filled-hidden-label-normal"
        label="Author Name"
        variant="outlined"
       
        
      />
      <br></br>
      <br></br>
      <TextField
      name='Description'
      

        hiddenLabel
        id="filled-hidden-label-normal"
        label="Description"
        variant="outlined"

      />
      <br></br>
      <br></br>
      <Button color='secondary' variant='contained'>Submit
      </Button>
      </Paper>
      </Grid>
    </Stack>
    </div>
  )
}

export default Addd