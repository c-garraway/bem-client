import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from "react-redux"
import { selectEntityData, selectCurrentEntity } from "../../features/entityData/entityDataSlice";
import DOInfo from "../DO/DOInfo"


export default function DOList() {
    const entityIndex = useSelector(selectCurrentEntity);
    const entityData = useSelector(selectEntityData);

    const rows = entityData[entityIndex].dO

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Position(s)</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Status</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row, index) => (            
            <TableRow
              key={crypto.randomUUID()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.position}</TableCell>
              <TableCell >{row.email}</TableCell>
              <TableCell >{row.phone}</TableCell>
              <TableCell >{row.status}</TableCell>
              <TableCell >
                <DOInfo
                currentDOIndex = {index}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}