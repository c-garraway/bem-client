import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CJInfo from '../CJ/CJInfo';
import { useDispatch, useSelector } from "react-redux"
import { selectEntityData, selectCurrentEntity, loadExistingCJs } from "../../features/entityData/entityDataSlice";
import { getEntityCorporateJurisdictions } from '../../api/cJ';

export default function CJList() {
  const dispatch = useDispatch();
  const entityIndex = useSelector(selectCurrentEntity);
  const entityData = useSelector(selectEntityData);
  const entityID = entityData[entityIndex].id;

  React.useEffect(() => {
    async function getCJs() {
      const CJs = await getEntityCorporateJurisdictions(entityID);
      console.log('CJs: ' + CJs);
      if(CJs.message) {
          return null;
      }
      dispatch(loadExistingCJs(CJs));

    }
    getCJs();
    // eslint-disable-next-line
  },[entityID])

  const rows = entityData[entityIndex].corporateJurisdictions

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Jurisdiction</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
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
              <TableCell >{row.status}</TableCell>
              <TableCell >{row.startDate}</TableCell>
              <TableCell >{row.endDate}</TableCell>
              <TableCell >
                <CJInfo
                  currentCJIndex = {index}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}