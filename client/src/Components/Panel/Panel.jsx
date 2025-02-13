import './Panel.css';
import Note from '../Note/Note';

const Panel = (props) => {

   const note1 = {
      title: 'Note Title',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi sequi consectetur animi voluptatum, quod assumenda porro in alias rem reprehenderit veritatis laudantium eos tempore quae sapiente consequatur temporibus quo dignissimos.',
      color: 'var(--note-clr-1)'
   }

   return (
      <main className='panel'>
         <Note {...note1} />
      </main>
   )
};

export default Panel;
