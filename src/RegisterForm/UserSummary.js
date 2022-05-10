import React, { useContext } from "react";
//GENERAL
import { TextField, Grid, styled } from "@material-ui/core";
import { isWidthDown } from "@material-ui/core/withWidth";
//CONTEXT
import { UserContext } from "./UserContext";
import { Button, IconButton, } from "@material-ui/core";

<h1> Donor Organisation </h1>
export default props => {
    const [state] = useContext(UserContext);
    const { user, errors } = state;
    const dateLimit = new Date();
    dateLimit.setFullYear(dateLimit.getFullYear() - 18);
    return ( <Grid container spacing = { 2 } >
        <Grid item xs = { 12 } >
        <TextField placeholder = 'Full Name'
        name = 'username'
        value = { user.username }
        variant = 'outlined'
        InputLabelProps = {
            {
                shrink: true
            }
        }
        required inputProps = {
            {
                minLength: 3,
                maxLength: 20
            }
        }
        error = {!!errors["username"] }
        fullWidth />
        </Grid> 

        
       <Grid item xs = { 12 } >
        <TextField placeholder = 'ID / Passport No.'
        name = 'Registtration No'
        type = 'name'
        variant = 'outlined'
        margin = 'normal'
        InputLabelProps = {
            {
                shrink: true
            }
        }
        error = {!!errors["email"] }
        required fullWidth />
        </Grid> 

        <Grid item xs = { 12 } >
         <TextField placeholder = 'Residence'
         name = 'Location'
         
         type = 'reg no'
         variant = 'outlined'
         margin = 'normal'
         InputLabelProps = {
         {
         shrink: true
         }
         }
         error = {!!errors["email"] }
         required fullWidth />
        </Grid> 
        <Grid item xs = { 12 } >
      <TextField placeholder = 'Telephone No.'
       name = 'Feild of Support'
       type = 'reg no'
       variant = 'outlined'
       margin = 'normal'
       InputLabelProps = {
     {
     shrink: true
     }
     }
     error = {!!errors["email"] }
     required fullWidth />
     </Grid> 
     <Grid item xs = { 12 } >
     </Grid >

        <Grid item xs = { 12 } >
         <TextField placeholder = 'Email Address'
         name = 'Website'
         type = 'reg no'
         variant = 'outlined'
         margin = 'normal'
         InputLabelProps = {
         {
         shrink: true
         }
         }
         error = {!!errors["email"] }
         required fullWidth />
         </Grid> 

         <Grid item xs = { 12 } >
         <TextField placeholder = 'Website'
         name = 'Feild of Support'
         type = 'reg no'
         variant = 'outlined'
         margin = 'normal'
         InputLabelProps = {
         {
         shrink: true
         }
         }
          error = {!!errors["email"] }
         required fullWidth />
         </Grid>
  
        <Grid item xs = { 12 } >
       <TextField placeholder = 'Picture'
       name = 'Feild of Support'
       type = 'reg no'
       variant = 'outlined'
       margin = 'normal'
       InputLabelProps = {
      {
       shrink: true
       }
       }
       error = {!!errors["email"] }
       required fullWidth />
       </Grid> 
       <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Choosefile
        </Button>
      </label>
      <h3>   </h3>
      <input accept="image/*" id="icon-button-file"
        type="file" style={{ display: 'none' }} />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture"
        component="span">
        </IconButton>
      </label>
       <Grid item xs = { 12 } >
      <TextField placeholder ='Bank Statements'
       name = 'Feild of Support'
       type = 'reg no'
       variant = 'outlined'
       margin = 'normal'
       InputLabelProps = {
      {
       shrink: true
      }
     }
     error = {!!errors["email"] }
     required fullWidth />
     </Grid> 
     <label htmlFor="contained-button-file">
  <Button variant="contained" color="primary" component="span">
    Choosefile
  </Button>
</label>
<h3>   </h3>
<input accept="image/*" id="icon-button-file"
  type="file" style={{ display: 'none' }} />
<label htmlFor="icon-button-file">
  <IconButton color="primary" aria-label="upload picture"
  component="span">
  </IconButton>
</label>
     <Grid item xs = { 12 } >
     <TextField placeholder = 'Donotion Range'
     name = 'Feild of Support'
     type = 'reg no'
     variant = 'outlined'
     margin = 'normal'
     InputLabelProps = {
     {
     shrink: true
     }
     }
     error = {!!errors["email"] }
     required fullWidth />
    </Grid> 

        </Grid>
       
    );
};