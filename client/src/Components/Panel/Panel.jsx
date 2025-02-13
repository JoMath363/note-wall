import './Panel.css';
import Note from '../Note/Note';
import { useContext, useEffect } from 'react';
import { NotesContext } from '../../context';

const Panel = (props) => {
   const {notes, setNotes } = useContext(NotesContext)

   return (
      <main className='panel'>
         {notes.map((data, i) => <Note key={i} index={i} {...data}/>)}
      </main>
   )
};

export default Panel;
