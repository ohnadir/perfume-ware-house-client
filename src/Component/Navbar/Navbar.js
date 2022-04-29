import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars, faTimes,} from "@fortawesome/free-solid-svg-icons"
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../firebase.init';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth);
    }
    return (
        <div className='flex items-center h-14 px-6 justify-between bg-slate-600 text-white  relative z-50'>
            <div>
                <span>Perfume wareHouse</span>
            </div>
            <div className='flex gap-6 items-center hidden md:flex'>
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>

                {user && <>
                    <CustomLink to='/manageitems'>Manage Items</CustomLink>
                    <CustomLink to='/additems'>Add Items</CustomLink>
                    <CustomLink to='/myitems'>My Items</CustomLink>
                </>}
                {user ? <button onClick={handleLogout}>Logout</button>
                    :
                <CustomLink to='/login'>Login</CustomLink>
                }
            </div>
            <FontAwesomeIcon
                icon={open ? faTimes : faBars}
                onClick={() => setOpen(!open)}
                className="text-white w-6 h-6 cursor-pointer md:hidden"/>
            {open && (
                <div className="bg-slate-600 absolute top-full left-0 flex flex-col w-full pb-8 md:hidden">
                    <div className=" flex gap-4 flex-col items-center text-xl">
                        <CustomLink to='/home'>Home</CustomLink>
                        <CustomLink to='/blogs'>Blogs</CustomLink>
                        {user && <>
                            <CustomLink to='/manageitems'>Manage Items</CustomLink>
                            <CustomLink to='/additems'>Add Items</CustomLink>
                            <CustomLink to='/myitems'>My Items</CustomLink>
                        </>}
                        {user ? <button onClick={handleLogout}>Logout</button>
                            :
                        <CustomLink to='/login'>Login</CustomLink>
                        }
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;