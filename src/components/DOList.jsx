import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
function createData(name, position, address, email, phone) {
  return { name, position, address, email, phone };
}

const rows = [
  createData('John Doe', 'CEO','123 First Lane, Toronto, ON',  'jdoe@email.ca', '555-555-5555'),
  createData('James Smith', 'CFO','123 First Lane, Toronto, ON', 'jsmith@email.ca', '555-555-5555'),
  createData('Jane Doe',  'Corporate Secretary','123 First Lane, Toronto, ON', 'janedoe@email.ca', '555-555-5555'),
  createData('Jackie Snow', 'Director', '123 First Lane, Toronto, ON','jsnow@email.ca', '555-555-5555'),
  createData('Catherine White', 'Director','123 First Lane, Toronto, ON', 'cwhite@email.ca', '555-555-5555'),
];

export default function DOList() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Position(s)</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.position}</TableCell>
              <TableCell >{row.address}</TableCell>
              <TableCell >{row.email}</TableCell>
              <TableCell >{row.phone}</TableCell>
              <TableCell >
                <Button /* variant="outlined" */ startIcon={<InfoOutlinedIcon />}>    </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}