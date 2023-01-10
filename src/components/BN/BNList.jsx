import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BNInfo from '../BN/BNInfo'
import { useSelector } from "react-redux"
import { selectEntityData, selectCurrentEntity } from "../../features/entityData/entityDataSlice";

export default function BNList() {
  const entityIndex = useSelector(selectCurrentEntity);
  const entityData = useSelector(selectEntityData);
 
  const rows = entityData[entityIndex].businessNames

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
          {rows?.map((row,index) => (

            <TableRow
              key={crypto.randomUUID()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.businessName}
              </TableCell>
              <TableCell >{row.jurisdiction}</TableCell>
              <TableCell >{row.creationDate}</TableCell>
              <TableCell >{row.status}</TableCell>
              <TableCell >
                <BNInfo
                  currentBNIndex = {index}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}