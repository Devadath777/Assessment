import React from 'react'
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import './style.css'
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
 

const Blog = () => {
    var [blog,setblog] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((resp)=>{
            console.log(resp)
            setblog(blog=resp.data)
        })
    
     },[])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow className='bord'>
            <StyledTableCell align="centre" className='bord'>id</StyledTableCell>
            <StyledTableCell align="centre" className='bord'>title</StyledTableCell>
           
            
          </TableRow>
        </TableHead>
        <TableBody className='bord'>
          {blog.map((value,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="centre" className='bord'>{value.id}</StyledTableCell>
              <StyledTableCell align="centre" className='bord'>{value.title}</StyledTableCell>
           
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Blog
