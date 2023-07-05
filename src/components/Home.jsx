import { useContext ,useState} from 'react';

import {Box} from '@mui/material';
import { makeStyles } from '@mui/styles';
//components
import Header from "./Header";
import Form from "./Form";
import SelectTab from './SelectTab';
import Response from './Response';
import ErrorScreen from './ErrorScreen';

import { DataContext } from './context/DataProvider';
import { checkParams } from '../utils/common-utils';
import SnackBar from './SnackBar';
import { getData } from '../service/api';

const useStyles = makeStyles({
    component:{
        width:'60%',
        margin:'20px auto 0'
    }
})
const Home =  () => {
    const classes = useStyles();

    const [error,setError] = useState(false);
    const[errorMsg,setErrorMsg] = useState('');
    const [errorResponse,setErrorResponse] = useState(false);
    const [apiResponse,setApiResponse] = useState({});

    const {formData,jsonText,paramData,HeaderData}= useContext(DataContext);

    const onSendClick= async () => {

        if(!checkParams(formData,jsonText,paramData,HeaderData,setErrorMsg)){
            setError(true);
            return false;
        }

        let response = await getData(formData,jsonText,paramData,HeaderData);

        if(response == 'error'){
            setErrorResponse(true);
            return;
        }

        setErrorResponse(false);
        setApiResponse(response.data);
        

    }
    return (
        <>
            <Header/>
            <Box className={classes.component}>
                <Form onSendClick={onSendClick}/>
                <SelectTab/>
                {errorResponse?<ErrorScreen/>:<Response data={apiResponse} />}
                {error && <SnackBar error={error} setError={setError} errorMsg={errorMsg}/>}
            </Box>
            
        </>
        
    )
}

export default Home;