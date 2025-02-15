import './Note.css';
import TrashIcon from '../Assets/trash_icon.svg'
import { useState } from 'react';
import { useNotes } from '../../context';

const Note = (props) => {
   const { removeNoteById } = useNotes();

   const [editorMode, setEditorMode] = useState(false);
   const [color, setColor] = useState(props.color);
   const [title, setTitle] = useState(props.title);
   const [description, setDescription] = useState(props.description);

   const toogleEditorMode = () => {
      setEditorMode(!editorMode)
   }

   return (
      <div className='note' style={{ background: color }} >
         <div className={editorMode ? 'note-editor visible' : 'note-editor'} >
            <div className='color-selector'>
               {
                  [...Array(4)].map((_, i) => `var(--note-clr-${i + 1})`).map((button, i) =>
                     <button
                        className={button == color ? 'color-btn active' : 'color-btn'}
                        style={{ background: button }} key={i}
                        onClick={() => setColor(button)} />
                  )
               }
            </div>

            <button className='delete-btn' onClick={() => removeNoteById(props.id)}>
               <img src={TrashIcon} alt="Trash Icon" />
            </button>
         </div>

         <button className='note-edit-btn' onClick={toogleEditorMode} />

         <input className='title-input'
            type="text" value={title}
            readOnly={!editorMode}
            placeholder='Insert a Title...'
            onChange={(e) => setTitle(e.target.value)} />

         <textarea
            className="description-input"
            value={description}
            rows={10}
            readOnly={!editorMode}
            placeholder='Type Something Here...'
            onChange={(e) => setDescription(e.target.value)} />
      </div >
   )
};

export default Note;
