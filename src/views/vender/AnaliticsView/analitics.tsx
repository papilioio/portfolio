import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {
    CloudDownload
} from '@material-ui/icons';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name: string, scrollDepth: number, spentTime: number, uniqueUsers: number) {
  return { 
    name,
    scrollDepth,
    spentTime,
    uniqueUsers,
  };
}

const rows = [
  createData('シナリオ1', 90.0, 600, 11),
  createData('シナリオ2', 64.0, 900, 15),
  createData('シナリオ3', 80.0, 160, 6),
  createData('ドキュメント1', 100.0, 300, 6),
  createData('ドキュメント２', 50.0, 160, 4),
  createData('ドキュメント3', 88.0, 260, 4),
  createData('メディア1', 70.0, 37, 6),
  createData('メディア２', 40.0, 180, 9),
  createData('メディア3', 80.0, 360, 9),
];

export default function AnaliticsView() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>シナリオ</TableCell>
            <TableCell align="right">読了率</TableCell>
            <TableCell align="right">閲覧時間</TableCell>
            <TableCell align="right">アクセスユーザー数</TableCell>
            <TableCell align="left">レポート</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.scrollDepth + '%'}</TableCell>
              <TableCell align="right">{row.spentTime + '秒'}</TableCell>
              <TableCell align="right">{row.uniqueUsers + '人'}</TableCell>
              <TableCell align="left"><Button variant="contained" startIcon={<CloudDownload />}>ダウンロード</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}