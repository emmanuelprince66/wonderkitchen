import React from "react";
import data from "./dataSet";
import "../Product/Product.css";
import Carts from "../Carts/Carts";
import Store from "../Store/Store";

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useLocation } from "react-router-dom";


const Product = ({ cart, setCart }) => {

  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    '@media (min-width:600px)': {
      width: 400,
    },
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }; 


  const location = useLocation();

  const addToCart = (items) => {
   
    let checkCart = cart.filter((i) => {
      return i.id === items.id;
  });
  if (checkCart.length !== 0) {
     handleOpen()
  } else {
      setCart((cart = [...cart, items]));
  }
  }

  return (
    <React.Fragment>
      <div className="products">
        <h4>Products in Our Store</h4>

        <div className="container mt-5">
          {location.pathname === "/" && (
            <Store data={data} addToCart={addToCart} />
            
          )}
           <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-description" >
              Item already in cart.please select another
            </Typography>
          </Box>
        </Fade>
      </Modal>
          {location.pathname === "/cart" && (
            <Carts cart={cart} setCart={setCart} />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
