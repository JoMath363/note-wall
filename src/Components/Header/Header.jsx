import './Header.css';
import NoteIcon from '../Assets/note_icon.svg';
import GearIcon from '../Assets/gear_icon.svg';
import PlusIcon from '../Assets/plus_icon.svg'
import { useNotes } from '../../context';

const Header = (props) => {
   const { addNote, settings, themes, setSettings } = useNotes();

   const toggleSettingsBox = () => {
      const btn = document.getElementById('settings-btn');
      const box = document.getElementById('settings-box');

      box.classList.toggle('active')
      btn.classList.toggle('active')
   }

   return (
      <header className='header'>
         <div className='logo'>
            <img className='icon' src={NoteIcon} alt="Note Icon" />
            <h1>Note Wall</h1>
         </div>

         <div className='header-left'>
            <button className='add-note-btn' onClick={addNote}>
               <img src={PlusIcon} alt="Plus Icon" />
               <p>Add Note</p>
            </button>

            <div className='settings'>
               <button id='settings-btn' onClick={toggleSettingsBox}>
                  <img src={GearIcon} alt="Gear Icon" />
               </button>

               <div id='settings-box'>
                  {
                     themes.map((theme, i) => {
                        return (
                           <button
                              className={settings.currentTheme == i ? 'theme-btn selected' : 'theme-btn'}
                              key={i}
                              onClick={() => setSettings(prev => ({ ...prev, currentTheme: i }))}>
                              <span style={{ background: theme.background }} />
                              <span style={{ background: theme.surface }} />
                              <span style={{ background: theme.primary }} />
                              <span style={{ background: theme.clr1 }} />
                              <span style={{ background: theme.clr2 }} />
                              <span style={{ background: theme.clr3 }} />
                              <span style={{ background: theme.clr4 }} />
                           </button>
                        )
                     })
                  }
               </div>
            </div>
         </div>
      </header>
   )
};

export default Header;
