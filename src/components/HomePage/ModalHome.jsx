import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector } from 'react-redux';

const ModalHome = ({handleTrainer,inputTrainer}) => {

  const checked = useSelector(store => store.checkedSlice)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // maxwidth: '100%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
  };  

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  

  return (
    <main className='modal' >    

       <Button onClick={handleOpen}>Welcome</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <h2 className="home__title">Pokedex</h2>
          {/* Pokedex */}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <header className="home__content">
         
            <h2 className="home__welcome">Hi Trainer!</h2>
            <>To start, please, enter your trainer name</>
            <form onSubmit={handleTrainer}>
              <input 
                maxLength={10}
                placeholder='Nickname' 
                required 
                className="home__input" 
                ref={inputTrainer} type="text" 
              />
              <button className="home__button">Start!</button>
            </form>      

          </header>
          </Typography>
        </Box>
      </Modal>
    </main>
  )
}

export default ModalHome