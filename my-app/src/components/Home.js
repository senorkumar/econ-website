import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Input, FormControl, TextField, Button} from '@material-ui/core';
const handleSubmit = data => alert(JSON.stringify(data, null, 2));
const home = () => {
    return (
        <>
        
    
            <h1>Homepage</h1>
            <p>Welcome to ....</p>
            <p>Register for our study here:</p>
            <form className = {"Name"} onSubmit = {handleSubmit} >
                <TextField placeholder = "Name" />
                <Button
                type = "submit">
                    Submit
                </Button>

            </form>

        


        </>

      
    );
}
 
export default home;