import React from "react";
import Bookmark from "./Components/Bookmark/Bookmark";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import Search from "./Components/Search/Search";
import Settings from "./Components/Settings/Settings";
import SideBar from "./Components/SideBar/SideBar";
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import { Link } from "react-router-dom";
import './App.css'
function App() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <BrowserRouter>
        <div className="flex max-lg:flex-col">
         <span onClick={toggleDrawer(true)} className="p-[10px] lg:hidden"><MenuIcon/></span> 
      <Drawer open={open} onClose={toggleDrawer(false)}>
       <div className="flex flex-col gap-[20px] p-[20px]">
       <span className="icon_sidebar flex justify-start cursor-pointer" onClick={toggleDrawer(false)}>
        <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          fill='white'
          className="bi bi-house"
          viewBox="0 0 16 16"
        >
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
        </svg>
        <p>Home</p>
        </Link>
      </span>
     
        <span className="icon_sidebar flex justify-start cursor-pointer"  onClick={toggleDrawer(false)}>
        <Link to="/search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            fill='white'
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          <p>Search</p>
        </Link>
        </span>
  

      <span className="icon_sidebar flex w-[102%] justify-start cursor-pointer"  onClick={toggleDrawer(false)}>
      <Link to="/menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          fill='white'
          className="bi bi-book"
          viewBox="0 0 16 16"
        >
          <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
        </svg>
        <p>Menu</p>
        </Link>
      </span>
      <span className="icon_sidebar flex w-[102%] justify-start cursor-pointer "  onClick={toggleDrawer(false)}>
        <Link to='/bookmark'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          fill='white'
          className="bi bi-bookmark"
          viewBox="0 0 16 16"
        >
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
        </svg>
        <p>Bookmark</p>
        </Link>
      </span>
      <span className="icon_sidebar flex w-[102%] justify-start cursor-pointer"  onClick={toggleDrawer(false)}>
        <Link to='/setting'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          fill='white'
          className="bi bi-gear"
          viewBox="0 0 16 16"
        >
          <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
          <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
        </svg>
        <p>Settings</p>
        </Link>
      </span>
       </div>
      </Drawer>
          <SideBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/setting" element={<Settings />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
