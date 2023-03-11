// import side_bare scss
import './sideBare.scss'
// import icons
import { IoMdSpeedometer } from 'react-icons/io'
import { RiFileList3Fill } from 'react-icons/ri' 
import { BiAddToQueue } from 'react-icons/bi'
import { BsPeopleFill } from 'react-icons/bs'
import { FaRegUserCircle } from 'react-icons/fa'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { FiSettings } from 'react-icons/fi'

function SideBare() {
  return (
    <div className='sideBar grid'>
        <div className="logoDiv flex">
            <h2>XXXXXXX</h2>
        </div>

        <div className="menuDiv">
            <h3 className='divTitle'>
                Quick Menu
            </h3>
            <ul className="menuLists grid">

                <li className="listItem">
                    <a href="#" className="menuLink flex">
                        <IoMdSpeedometer />
                        <span className="smallText">
                            Dashboard
                        </span>
                    </a>
                </li>

                <li className="listItem">
                    <a href="#" className="menuLink flex">
                        <RiFileList3Fill />
                        <span className="smallText">
                            Project list
                        </span>
                    </a>
                </li>

                <li className="listItem">
                    <a href="createProject" className="menuLink flex">
                        <BiAddToQueue />
                        <span className="smallText">
                            Create Project
                        </span>
                    </a>
                </li>

                <li className="listItem">
                    <a href="#" className="menuLink flex">
                        <BsPeopleFill />
                        <span className="smallText">
                            Clients
                        </span>
                    </a>
                </li>
            </ul>
        </div>

        <div className="settingsDiv">
            <h3 className='divTitle'>
                Settings
            </h3>
            <ul className="menuLists grid">

                <li className="listItem">
                    <a href="#" className="menuLink flex">
                        <FaRegUserCircle />
                        <span className="smallText">
                            Profil
                        </span>
                    </a>
                </li>

                <li className="listItem">
                    <a href="#" className="menuLink flex">
                        <IoIosNotificationsOutline />
                        <span className="smallText">
                            Notifications
                        </span>
                    </a>
                </li>

                <li className="listItem">
                    <a href="#" className="menuLink flex">
                        <FiSettings />
                        <span className="smallText">
                            Settings
                        </span>
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default SideBare