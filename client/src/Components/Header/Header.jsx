import './Header.css';
import NoteIcon from '../Assets/note_icon.svg';
import GearIcon from '../Assets/gear_icon.svg';
import PlusIcon from '../Assets/plus_icon.svg'

const Header = (props) => {
   return (
      <header className='header'>
         <div className='logo'>
            <img className='icon' src={NoteIcon} alt="Note Icon" />
            <h1>Note Wall</h1>
         </div>

         <div className='header-left'>
            <button>
               <img src={PlusIcon} alt="Plus Icon" />
               <p>Add Note</p>
            </button>
            <img className='icon' src={GearIcon} alt="Gear Icon" />
         </div>
      </header>
   )
};

export default Header;
