import './Header.css';
import NoteIcon from '../Assets/note_icon.svg';
import GearIcon from '../Assets/gear_icon.svg';

const Header = (props) => {
   return (
      <header className='header'>
         <div className='logo'>
            <img className='icon' src={NoteIcon} alt="Note Icon" />
            <h1>Note Wall</h1>
         </div>

         <div className='header-left'>
            <img className='icon' src={GearIcon} alt="Gear Icon" />
         </div>
      </header>
   )
};

export default Header;
