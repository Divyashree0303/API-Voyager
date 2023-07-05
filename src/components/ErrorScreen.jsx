import { Box,Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
    error:{
        width:'60%',
        height:'auto',
        margin:'auto',
        objectPosition:'center 0'
    }
})
const ErrorScreen = () => {
    const error = 'https://i.stack.imgur.com/01tZQ.png';
    const classes = useStyles();

    return (
        <Box>
            <Typography mt={2} mb={2}>Response</Typography>
            <Box style={{display:'flex'}}>
                <img src={error} alt="error" className={classes.error}/>
            </Box>
        </Box>
    )
}

export default ErrorScreen;