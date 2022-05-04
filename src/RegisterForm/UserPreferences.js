import React, { useContext } from "react";
//GENERAL
import { TextField, Grid } from "@material-ui/core";
import { isWidthDown } from "@material-ui/core/withWidth";
//CONTEXT
import { UserContext } from "./UserContext";


export default props => {
    const [state] = useContext(UserContext);
    const { user, errors } = state;
    const dateLimit = new Date();
    dateLimit.setFullYear(dateLimit.getFullYear() - 18);
    return ( <Grid container spacing = { 2 } >
        <Grid item xs = { 12 } >
        <TextField placeholder = 'Organisation Name'
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
        <TextField placeholder = 'Registration No.'
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
         <TextField placeholder = 'Location'
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
  <TextField placeholder = 'Feild of Support'
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