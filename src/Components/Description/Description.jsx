import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Description.css";
import { MdAddShoppingCart } from "react-icons/md";
import data from "../Product/dataSet";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const Description = ({ cart , setCart }) => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);


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
  const addToCart = (id) => {
   
    let checkCart = cart.filter((i) => {
      return i.id === id;
  });

  if (checkCart.length !== 0) {
    handleOpen()
  } else {
      setCart((cart = [...cart, {...product}]));
  }
  }


  useEffect(() => {
    data.forEach((item) => {
        item.id == id && setProduct(item)
    });
  }, [id]);
  const handleClick = () => {
    navigate("/");
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="button m-4">
          <button onClick={handleClick}>Back to Product</button>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 desImg">
            <img src={product?.image} alt="" className="img-fluid" />
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
          <Box sx={style}  >
            <Typography id="transition-modal-description" >
              Item already in cart.please select another
            </Typography>
          </Box>
        </Fade>
      </Modal>
          </div>
          <div className="col-md-6 des">
            <div className="namePrice">
              <h4>{product?.name}</h4>
              <h4>${product?.price}</h4>
            <button onClick={() => addToCart(product.id)} ><MdAddShoppingCart /></button>
            </div>
            <p>{product?.description}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Description;
