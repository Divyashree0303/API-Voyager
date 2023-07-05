
import { TableRow,TableCell ,Checkbox,TextField} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useState } from "react";

const useStyles = makeStyles({
    tableCell:{
        border:'1px solid rgba(224,224,224,1)',
        borderCollapse:'collapse',
        padding:['7px 5px','!important']
    },
    checkBox:{
        padding:['2px 5px','!important']
    },
    textField:{
        width:'100%'
    }
})

const AddRow = ({setRows,rowId,rows,data,setData}) => {
    const classes=useStyles();

    const [checked,setChecked] = useState(false);

    const handleChange = (e) => {   

        let result = data.filter(entry => entry.id === Number(e.target.name))[0];


        
        if(!checked){
            setChecked(true);
            console.log(rows);
            setRows(prev => [...prev,rowId]);
            result={...checked,id:Number(e.target.name),check:true};
        }else{
            setChecked(false);
            result={...checked,id:Number(e.target.name),check:false};
        }

        let index=data.findIndex(value => value.id===Number(e.target.name));

        if(index===-1){
            setData(prev => [...prev,result]);
        }else{
            const newArray = Object.assign([...data],{
                [index]:result
            })

            setData(newArray);
        }

        console.log(data);

    }

    const onTextChange =  e => {

        let result = data.filter(entry => entry.id === rowId)[0];
        result={...result,id:rowId,[e.target.name]:e.target.value};
        
        let index=data.findIndex(value => value.id===rowId);

        if(index===-1){
            setData(prev => [...prev,result]);
        }else{
            const newArray = Object.assign([...data],{
                [index]:result
            })

            setData(newArray);
        }

        console.log(data);

    }

    return (
        <TableRow>
            <TableCell className={classes.tableCell}>
                <Checkbox
                    name={rowId}
                    checked={checked}
                    className={classes.checkBox}
                    onChange={(e) => handleChange(e)}
                />
            </TableCell>
            <TableCell className={classes.tableCell}>
                <TextField
                    name='key'
                    inputProps={{style:{height:30,padding:'0 5px'}}}
                    className={classes.textField}
                    onChange={e => onTextChange(e)}
                />
            </TableCell>
            <TableCell className={classes.tableCell}>
                <TextField
                    name='value'
                    inputProps={{style:{height:30,padding:'0 5px'}}}
                    className={classes.textField}
                    onChange={e => onTextChange(e)}
                />
            </TableCell>
        </TableRow>
    )
}

export default AddRow;