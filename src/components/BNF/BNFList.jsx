import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BNFInfo from '../BNF/BNFInfo';
import { useDispatch, useSelector } from "react-redux"
import { selectEntityData, selectCurrentEntity, loadExistingBNFs } from "../../features/entityData/entityDataSlice";
import { getEntityBusinessNameFilings } from '../../api/bNF';

export default function BNFList() {
  const dispatch = useDispatch();
  const entityIndex = useSelector(selectCurrentEntity);
  const entityData = useSelector(selectEntityData);
  const entityID = entityData[entityIndex].id;

  React.useEffect(() => {
    async function getBNFs() {
      const BNFs = await getEntityBusinessNameFilings(entityID);
      if(BNFs?.message) {
          return;
      }
      dispatch(loadExistingBNFs(BNFs));
    }
    getBNFs();
    // eslint-disable-next-line
  },[entityID])

  const rows = entityData[entityIndex].businessNameFilings

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
          {rows?.map((row,index) => (
            <TableRow
              key={crypto.randomUUID()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.businessName}
              </TableCell>
              <TableCell /* align='center' */ >{row.jurisdiction}</TableCell>
              <TableCell >{row.subName}</TableCell>
              <TableCell >{row.dueDate}</TableCell>
              <TableCell >
                <BNFInfo
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