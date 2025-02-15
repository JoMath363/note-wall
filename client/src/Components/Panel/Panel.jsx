import './Panel.css';
import Note from '../Note/Note';
import { useNotes } from '../../context';

const Panel = (props) => {
   const { notes } = useNotes();

   return (
      <main className='panel'>
         {notes.map((note) => <Note key={note.id} {...note}/>)}
      </main>
   )
};

export default Panel;
