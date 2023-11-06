import React, {FC, memo} from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {stream} from "../types/types";

interface TableStreamsProps {
    streams: stream[];
}
const TableStreams:FC<TableStreamsProps> = memo(({streams}) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Clients</TableCell>
                        <TableCell align="right">Input bitrate</TableCell>
                        <TableCell align="right">Output bitrate</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {streams.map((stream: stream) => (
                        <TableRow
                            key={stream.name}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {stream.name}
                            </TableCell>
                            {stream.stats ? (
                                <>
                                    <TableCell
                                        align="right">{stream.stats.status ? stream.stats.status : 'null'}</TableCell>
                                    <TableCell
                                        align="right">{stream.stats.online_clients ? stream.stats.online_clients : 'null'}</TableCell>
                                    <TableCell
                                        align="right">{stream.stats.input_bitrate ? stream.stats.input_bitrate : 'null'}</TableCell>
                                    <TableCell
                                        align="right">{stream.stats.output_bitrate ? stream.stats.output_bitrate : 'null'}</TableCell>
                                </>
                            ) : (
                                <>
                                    <TableCell
                                        align="right">null</TableCell>
                                    <TableCell
                                        align="right">null</TableCell>
                                    <TableCell
                                        align="right">null</TableCell>
                                    <TableCell
                                        align="right">null</TableCell>
                                </>
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
});

export default TableStreams;
