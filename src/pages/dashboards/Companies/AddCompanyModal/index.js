import React from 'react';
import {
  Grid,
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  Typography,
  Button
} from '@mui/material';

const AddCompanyModal = (props) => {
  const {open, onClose} = props;
  const [userType, setUserType] = React.useState(null);

  return (
    <Dialog fullWidth={true} open={open} onClose={onClose} maxWidth='md'>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid xs={12} md={12} lg={12} style={{marginBottom: 15}}>
            <Typography>Add New Company</Typography>
          </Grid>
          <Grid
            xs={12}
            md={12}
            lg={6}
            style={{marginBottom: 15, paddingRight: 5}}
          >
            <Select
              autoFocus
              value={userType}
              fullWidth
              size='small'
              onChange={(e) => {
                  setUserType(e.target.value);
              }}
            >
              <MenuItem value='Free User'>Free User</MenuItem>
              <MenuItem value='Premium User'>Premium User</MenuItem>
              <MenuItem value='Personalized User'>Personalized User</MenuItem>
            </Select>
          </Grid>
          <Grid xs={12} md={12} lg={6} style={{marginBottom: 15}}>
            <TextField size='small' placeholder='Fullname' fullWidth />
          </Grid>
          <Grid xs={12} md={12} lg={6} style={{marginBottom: 15, paddingRight: 5}}>
            <TextField size='small' placeholder='Email' fullWidth />
          </Grid>
          <Grid xs={12} md={12} lg={6} style={{marginBottom: 15}}>
            <TextField size='small' placeholder='Company' fullWidth />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
          <Button onClick={onClose}>Close</Button>
          <Button onClick={onClose}>Save</Button>
        </DialogActions>
    </Dialog>
  );
};

export default AddCompanyModal;
