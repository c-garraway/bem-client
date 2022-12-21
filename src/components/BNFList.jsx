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

function createData(bname, jurisdiction, sname, dueDate, confirmation) {
  return { bname, jurisdiction, sname, dueDate, confirmation };
}

const rows = [
  createData('The Brick', 'ON', 'Jane Doe','September 1, 2001',  'S:/filings/thebrick2001on.pdf'),
  createData('The Brick', 'BC','Jane Doe','September 1, 2001',  'S:/filings/thebrick2001bc.pdf'),
  createData('Ethan Allen', 'ON', 'Jane Doe','September 1, 2001', 'S:/filings/ethanallen2001on.pdf'),
  createData('Ethan Allen', 'BC','Jane Doe','September 1, 2001', 'S:/filings/ethanallen2001bc.pdf'),
  createData('Leons', 'ON', 'Jackie Snow','September 1, 2001', 'S:/filings/leons2001on.pdf'),
  createData('Ashley Home Store', 'ON','Jane Doe', 'September 1, 2001','S:/filings/ashley2001on.pdf'),
  createData('Structube', 'ON','Jackie Snow','September 1, 2001', 'S:/filings/structube2001on.pdf'),
];

export default function DOList() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Business Name</TableCell>
            <TableCell>Jurisdiction</TableCell>
            <TableCell>Name (submitter)</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Confirmation</TableCell>
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
                {row.bname}
              </TableCell>
              <TableCell align='center' >{row.jurisdiction}</TableCell>
              <TableCell >{row.sname}</TableCell>
              <TableCell >{row.dueDate}</TableCell>
              <TableCell >{row.confirmation}</TableCell>
              <TableCell >
                <Button startIcon={<InfoOutlinedIcon />}>    </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}