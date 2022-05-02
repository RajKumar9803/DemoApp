import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

import { Box, Card, CardContent, CardMedia, TextField } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),

  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 30,
            top: 60,
            color: "white",
            background: "red",
            '&:hover': {
              background: "red",
              color: "white"
            }
          }}
        >
          <CloseIcon />
        </IconButton>


      ) : null}
    </DialogTitle>
  );
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} sx={{ position: "absolute", left:180,  }}>
        Menus
       
      </Button>
      <BootstrapDialog
        fullScreen
        onClose={handleClose}
        
        open={open}
        sx={{
          marginTop:"-20px"
        }}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography sx={{
            position: "absolute",
            left: 200,
            top: 60,
            fontStyle: "normal",
            fontWeight: 600,

          }}>Product Image</Typography>
          <Typography
            sx={{
              position: "absolute",
              left: 740,
              top: 70,
              fontStyle: "normal",
              fontWeight: 600,


            }}
          >Product Name</Typography>
        </BootstrapDialogTitle>
        <DialogContent dividers>

          <Card sx={{
            display: 'flex', position: "absolute",
            left: "170px",
            top: "100px",
            bottom:"300px",
            color: "white",
            width: "80%",
            height: "450px",
            padding: "20px",
            paddingTop: "10px"

          }}>

            <CardMedia
              component="img"
              sx={{ width: 529, }}
              image="\asset\Rectangle 199.png"
              alt="Live from space album cover"
            />


            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto', marginTop: "10px" }}>
                <TextField id="outlined-basic" placeholder='pizza' variant="outlined" sx={{ width: "420px" }} />

              </CardContent>


              <CardContent sx={{ flex: '60 auto', flexDirection: "row" }}>
                <Typography sx={{
                  position: "absolute",
                  left: "570px",
                  top: "100px",
                  color: "black",
                  textTransform: "capitalize"
                }}>Price</Typography>
                <Typography sx={{
                  position: "absolute",
                  left: "780px",
                  top: "100px",
                  color: "black",
                  textTransform: "capitalize"
                }}>discount Price</Typography>
                <TextField id="outlined-basic" placeholder='180' variant="outlined" />
                <TextField id="outlined-basic" placeholder='175' variant="outlined" />
              </CardContent>


              <CardContent sx={{ flex: '500 auto', flexDirection: "row" }}>
                <Typography sx={{
                  position: "absolute",
                  left: "570px",
                  top: "190px",
                  color: "black",
                  textTransform: "capitalize"
                }}>unit</Typography>
                <Typography sx={{
                  position: "absolute",
                  left: "700px",
                  top: "190px",
                  color: "black",
                  textTransform: "capitalize"
                }}>stock</Typography>
                <Typography sx={{
                  position: "absolute",
                  left: "850px",
                  top: "190px",
                  color: "black",
                  textTransform: "capitalize"
                }}>is Veg</Typography>
                <TextField id="outlined-basic" size='small' placeholder='180' variant="outlined" sx={{ width: "140px" }} />
                <TextField id="outlined-basic" size='small' placeholder='175' variant="outlined" sx={{ width: "140px" }} />
                <TextField id="outlined-basic" size='small' placeholder='175' variant="outlined" sx={{ width: "140px" }} />
              </CardContent>
              <CardContent sx={{flexDirection: "row",position:"absolute",top:"280px",width:"425px" }}>
                <TextField placeholder='type here.....'
                  multiline
                  fullWidth
                  rows={3}


                />

              </CardContent>

              <DialogActions sx={{
                background: " #94CD00",
                borderRadius: "60px",
                width: "277px",
                color: " #FFFFFF",
                margin:"10px",
                position:"absolute",
                left:"555px",
                top:"410px",
                height:"35px"

              }}>
               
                <Button autoFocus onClick={handleClose} color="inherit"  sx={{position:"absolute",left:"100px"}} >
                  Save changes
                </Button>

                
              </DialogActions>




            </Box>

          </Card>
        </DialogContent>

      </BootstrapDialog>
    </div>
  );
}
