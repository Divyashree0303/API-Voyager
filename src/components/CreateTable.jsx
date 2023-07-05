
import { Box, Typography,Table,TableHead,TableRow,TableCell,TableBody} from '@mui/material';
import { makeStyles } from '@mui/styles';
//components
import AddRow from './AddRow';
import { useState } from 'react';

const useStyles = makeStyles({
    tableCell:{
        border:'1px solid rgba(224,224,224,1)',
        borderCollapse:'collapse',
        padding:['7px 5px','!important']
    }
})

const CreateTable = ({ text ,data,setData}) => {
    const classes=useStyles();

    const [rows,setRows] = useState([0]);
    
    return (
        <Box>
            <Typography mt={2} mb={2}>{text}</Typography>
            <Table sx={{ minWidth: '100%', border:'1px solid rgba(224,224,224,1)'}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableCell}></TableCell>
                        <TableCell className={classes.tableCell}>KEY</TableCell>
                        <TableCell className={classes.tableCell}>VALUE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        
                        rows.map((row,index) => (
                            <AddRow 
                                rows={rows} 
                                setRows={setRows} 
                                rowId={index} 
                                key={index}
                                data={data}
                                setData={setData}
                            />
                        ))
                    }
                </TableBody>
            </Table>
        </Box>
    )
}

export default CreateTable;