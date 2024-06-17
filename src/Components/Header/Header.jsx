import React, { useState } from "react";
import moment from "moment";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import toast, { Toaster } from 'react-hot-toast';
const Header = () => {
  const CurrentDate = moment().format("dddd, MMMM D");
  const [open, setOpen] = React.useState(localStorage.getItem('Username') ? false : true);

  const [name , setName] = useState(localStorage.getItem('Username') ? localStorage.getItem('Username') :'Jane')
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSave =()=>{
    setOpen(false)
    localStorage.setItem('Username',name)
    toast.success(`Welcome ${name}`)
  }
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex flex-col">
        <h1 className="text-[24px]">Hello, {name}</h1>
        <h2 className="text-[#706f6f]">{CurrentDate}</h2>
      </div>
      <div className="flex items-center gap-[15px]">
        <button className="rounded-xl bg-[#262424] px-[10px] py-[3px] text-[#706f6f] flex items-center gap-[5px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#706f6f"
            class="bi bi-compass"
            viewBox="0 0 16 16"
          >
            <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016m6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
            <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
          </svg>
          For you
        </button>
        <button className="rounded-xl bg-[#262424] px-[10px] py-[3px] text-[#706f6f] flex items-center gap-[5px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#706f6f"
            class="bi bi-tv"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2" />
          </svg>
          Screener
        </button>
        <button className="rounded-[51%] bg-[#262424] p-[8px] text-[#706f6f] flex items-center gap-[5px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#706f6f"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
      </div>
      <Modal
        sx={{display:'flex', justifyContent:'center', alignItems:'center'}}
        open={open}
        onClose={handleClose}
      
      >
        <Box sx={{backgroundColor:'white', color:'black',height:'auto', width:'300px',padding:'25px', display:'flex',flexFlow:'column',gap:'25px'}}>
          <p>Please input your name</p>
          <TextField id="outlined-basic" label="Your name" variant="outlined" onBlur={(e)=>{setName(e.target.value)}}/>
          <button className="bg-[blue] text-white p-[10px] rounded-xl" onClick={handleSave}>Save</button>
        </Box>
      </Modal>
      <Toaster/>
    </div>
  );
};

export default Header;
