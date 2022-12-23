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


/* function createData(name, jurisdiction, cdate, status) {
  return { name, jurisdiction, cdate, status};
}

const rowsf = [
  createData('The Brick', 'ON, BC', 'September 1, 2001', 'ACTIVE'),
  createData('Ethan Allen', 'ON, BC', 'September 1, 2001', 'ACTIVE'),
  createData('Leons', 'ON', 'September 1, 2001', 'ACTIVE'),
  createData('Ashley Home Store', 'ON', 'September 1, 2001', 'ACTIVE'),
  createData('Structube', 'ON', 'September 1, 2001', 'ACTIVE'),
]; */

export default function DOList() {
  const entityIndex = useSelector(selectCurrentEntity);
 
  const rows = store.getState().entityData[entityIndex].businessNames

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Business Name</TableCell>
            <TableCell>Jurisdiction(s)</TableCell>
            <TableCell>Creation Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.businessName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.businessName}
              </TableCell>
              <TableCell align='center'>{row.jurisdiction}</TableCell>
              <TableCell >{row.creationDate}</TableCell>
              <TableCell >{row.status}</TableCell>
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