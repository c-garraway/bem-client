import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CFInfo from '../CF/CFInfo';
import { useDispatch, useSelector } from "react-redux"
import { selectEntityData, selectCurrentEntity, loadExistingCFs } from "../../features/entityData/entityDataSlice";
import { getEntityCorporateFilings } from '../../api/cF';

export default function CFList() {

  const dispatch = useDispatch();
  const entityIndex = useSelector(selectCurrentEntity);
  const entityData = useSelector(selectEntityData);
  const entityID = entityData[entityIndex].id;

  React.useEffect(() => {
    async function getCFs() {
      const CFs = await getEntityCorporateFilings(entityID);
      console.log('CFs: ' + CFs);
      if(CFs.message) {
          return null;
      }
      dispatch(loadExistingCFs(CFs));

    }
    getCFs();
    // eslint-disable-next-line
  },[entityID])
  
  const rows = entityData[entityIndex].corporateFilings

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
          {rows?.map((row, index) => (
            <TableRow
              key={crypto.randomUUID()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell >{row.jurisdiction}</TableCell>
              <TableCell >{row.subName}</TableCell>
              <TableCell >{row.dueDate}</TableCell>
              <TableCell >
                <CFInfo
                  currentCFIndex = {index}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}