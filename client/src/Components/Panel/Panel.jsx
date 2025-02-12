import './Panel.css';

import PlusIcon from '../Assets/plus_icon.svg'
import TrashIcon from '../Assets/trash_icon.svg'
import Note from '../Note/Note';

const Panel = (props) => {
   return (
      <main className='panel'>
         <section className='tollbar'>
            <button>
               <img src={PlusIcon} alt="Plus Icon" />
               <p>Add Note</p>
            </button>
            <button className='trash'>
               <img src={TrashIcon} alt="Trash Icon" />
               <p>Drag Here to Delete</p>
            </button>
         </section>

         <Note/>
      </main>
   )
};

export default Panel;
