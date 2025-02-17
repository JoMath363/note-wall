import './Note.css';
import TrashIcon from '../Assets/trash_icon.svg'
import { useState } from 'react';
import { useNotes } from '../../context';

const Note = (props) => {
   const { removeNoteById, attNoteById } = useNotes();

   const [editorMode, setEditorMode] = useState(false);
   const [title, setTitle] = useState(props.title);
   const [description, setDescription] = useState(props.description);
   const [color, setColor] = useState(props.color);

   const toogleEditorMode = () => {
      if (editorMode) {
         const attNote = {
            id: props.id,
            title: title,
            description: description,
            color: color
         }

         attNoteById(attNote);
      }

      setEditorMode(!editorMode)
   }

   return (
      <div className='note' style={{ background: color }} >
         <div className={editorMode ? 'note-editor visible' : 'note-editor'} >
            <div className='color-selector'>
               {
                  [...Array(4)].map((_, i) => `var(--note-clr-${i + 1})`).map((btnColor, i) =>
                     <button
                        className={btnColor == color ? 'color-btn active' : 'color-btn'}
                        style={{ background: btnColor }} key={i}
                        onClick={() => setColor(btnColor)} />
                  )
               }
            </div>

            <button className='delete-btn' onClick={() => removeNoteById(props.id)}>
               <img src={TrashIcon} alt="Trash Icon" />
            </button>
         </div>

         <button className='note-edit-btn' onClick={toogleEditorMode} />

         <input 
            className={editorMode ? 'title-input active' : 'title-input'}
            type="text" value={title}
            readOnly={!editorMode}
            placeholder={editorMode ? 'Insert a Title...' : ''}
            onChange={(e) => setTitle(e.target.value)} />

         <textarea
            className={editorMode ? 'description-input active' : 'description-input'}
            value={description}
            rows={10}
            readOnly={!editorMode}
            placeholder={editorMode ? 'Type Something Here...' : ''}
            onChange={(e) => setDescription(e.target.value)} />
      </div >
   )
};

export default Note;
