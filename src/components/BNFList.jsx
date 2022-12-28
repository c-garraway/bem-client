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

export default function BNFList() {
  const entityIndex = useSelector(selectCurrentEntity);

  const rows = store.getState().entityData[entityIndex].businessNameFilings

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Business Name</TableCell>
            <TableCell>Jurisdiction</TableCell>
            <TableCell>Name (submitter)</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={crypto.randomUUID()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.businessName}
              </TableCell>
              <TableCell align='center' >{row.jurisdiction}</TableCell>
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