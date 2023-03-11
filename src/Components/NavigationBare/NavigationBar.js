import { BiSearchAlt } from 'react-icons/bi'
import profil from '../Assets/images/profil.png'
import edit from '../Assets/images/edit.png'
import logOut from '../Assets/images/log-out.png'
import help from '../Assets/images/question.png'
import settings from '../Assets/images/settings.png'
import user from '../Assets/images/user.png'


import './navigationBar.css'
import { useEffect, useRef, useState } from 'react'



function NavigationBar() {

    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if(!menuRef.current.contains(e.target)){
                setOpen(false);
            }
        }
        document.addEventListener("mousedown",handler);

        return () =>{
            document.removeEventListener("mousedown",handler);
        }
    })

  return (

    <div className='navBar'>
        <div className="searchBox">
            <input type="text" placeholder='Search...' />
            <div className='icon'>
                <BiSearchAlt />
            </div>
        </div>
        <div className="menu-container" ref={menuRef}>
            <div className="menu-trigger" 
                onClick={()=>{setOpen(!open)}}
            >
                <img src={profil}/>
            </div>

            <div className={`dropdown-menu ${open?'active':'inactive'}`}>
                <h3>Name</h3>
                <ul>
                    <DropdownItem img={user} text={"My Profile"} />
                    <DropdownItem img={edit} text={"Edit Profile"} />
                    <DropdownItem img={settings} text={"Settings"} />
                    <DropdownItem img={help} text={"Help"} />
                    <DropdownItem img={logOut} text={"logout"} />
                </ul>
            </div>
        </div>
    </div>
     
  )
}

function DropdownItem(props) {
    return(
        <li className='dropdownItem' >
            <img src={props.img} />
            <a>{props.text}</a>
        </li>
    )
}

export default NavigationBar