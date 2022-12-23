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
import {store} from '../app/store'
import { useSelector } from "react-redux"
import { selectCurrentEntity } from "../features/entityData/currentEntitySlice";

/* function createData(bname, jurisdiction, sname, dueDate, confirmation) {
  return { bname, jurisdiction, sname, dueDate, confirmation };
} */

/* const rows = [
  createData('Furniture Corporation', 'BC', 'Jane Doe','September 1, 2000',  'S:/filings/furniturcorp2000bc.pdf'),
  createData('Furniture Corporation', 'MB','Jane Doe','September 1, 2000', 'S:/filings/furniturcorp2000mb.pdf'),
  createData('Furniture Corporation',  'ON','Jane Doe','September 1, 2000', 'S:/filings/furniturcorp2002on.pdf'),
  createData('Furniture Corporation', 'PQ','Jane Doe', 'September 1, 2000','S:/filings/furniturcorp2002pq.pdf'),
]; */

export default function CFList() {

  const entityIndex = useSelector(selectCurrentEntity);
  
  const rows = store.getState().entityData[entityIndex].corporateFilings

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Jurisdiction</TableCell>
            <TableCell>Name (submitter)</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell >{row.jurisdiction}</TableCell>
              <TableCell >{row.subName}</TableCell>
              <TableCell >{row.dueDate}</TableCell>
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