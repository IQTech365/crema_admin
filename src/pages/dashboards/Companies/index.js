import React from 'react';
import {Grid, Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddCompanyModal from 'pages/dashboards/Companies/AddCompanyModal';

const Companies = (props) => {
  const [openAddCompanyModal, setOpenAddCompanyModal] = React.useState(false);

  const handleModalClose = () => {
    setOpenAddCompanyModal(false);
  };

  const handleModalOpen = () => {
    setOpenAddCompanyModal(true);
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid
          item
          sm={12}
          md={12}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            borderRadius: 5,
          }}
        >
          <Button
            variant='contained'
            startIcon={<AddIcon />}
            size='small'
            onClick={handleModalOpen}
          >
            Add
          </Button>
        </Grid>
      </Grid>
      <AddCompanyModal open={openAddCompanyModal} onClose={handleModalClose} />
    </>
  );
};

export default Companies;
