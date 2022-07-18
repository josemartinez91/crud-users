import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import UsersForm from './UsersForm';


const ModalUsers = ({getUsers, userSelected, deselectUser, handleOpen, handleClose,open}) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #1976d2',
        boxShadow: 24,
        p: 4,
    };
    const clearClick=()=>{
        handleOpen()
        deselectUser()
    }
    
    return (
        <div className='modal-container'>
            <Button onClick={clearClick} className="button-modal">Create user</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography className='modal-title' id="modal-modal-title" variant="h6" component="h2">
                        {userSelected ? "Update User": "Create User"}
                        
                    </Typography>
                    <UsersForm 
                    id="modal-modal-description" sx={{ mt: 2 }}
                        getUsers={getUsers}
                        handleClose={handleClose}
                        userSelected={userSelected}
                        deselectUser={deselectUser}
                        handleOpen={handleOpen}


                    />
                    <Typography >
                        
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default ModalUsers;