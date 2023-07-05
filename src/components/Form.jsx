import { useContext } from 'react';
import { DataContext } from './context/DataProvider';
import {Box,Select,MenuItem,TextField,Button} from '@mui/material';
import { useState } from 'react';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({

    component:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },
    select:{
        width:150,
        height:40
    },
    textField:{
        width:'100%',
        background:'#F6F6F6'
    },
    button:{
        width:100,
        height:40,
        marginLeft:[5,'!important']
    }
})

const Form = ({onSendClick}) => {

    const classes = useStyles()

    const {formData,setFormData} =useContext(DataContext);

    const handleChange = (e) => {
        setFormData({...formData,type:e.target.value});
    }

    const onUrlChange = (e) => {
        setFormData({...formData,url:e.target.value});
    }

    return (
        <Box className={classes.component} >
            <Select
                className={classes.select}
                value={formData.type}
                label="GET"
                onChange={(e) => handleChange(e)}
                >
                <MenuItem value={'GET'}>GET</MenuItem>
                <MenuItem value={'POST'}>POST</MenuItem>
            </Select>
            <TextField
                size="small"
                className={classes.textField}
                onChange={(e) => onUrlChange(e)}
            />
            <Button
                className={classes.button}
                variant='contained'
                onClick={() => onSendClick()}
            >
                Send
            </Button>
        </Box>
    )
}

export default Form;