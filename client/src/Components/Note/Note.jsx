import './Note.css';
import TrashIcon from '../Assets/trash_icon.svg'
import { useContext, useState } from 'react';
import { NotesContext } from '../../context';

const Note = (props) => {
   const { notes, setNotes } = useContext(NotesContext);

   const [editorVisible, setEditorVisible] = useState(false);
   const [backgroundColor, setBackgroundColor] = useState(props.color);
   const [title, setTitle] = useState(props.title);
   const [description, setDescription] = useState(props.description);

   const changeBackgroundColor = (e, color) => {
      const color_btns = document.getElementsByClassName('color-btn');

      for (let i = 0; i < color_btns.length; i++) {
         color_btns[i].classList.remove('active');
      }

      e.target.classList.add('active');

      setBackgroundColor(color);

      console.log(notes)
   }

   const deleteNote = () => {
      const newNotes = notes.filter((_, i) => i !== props.index);
      console.log(newNotes)
      setNotes(newNotes);
   }

   return (
      <div className='note' style={{ background: backgroundColor }} >
         <div className={editorVisible ? 'note-editor visible' : 'note-editor'} >
            <button className='color-btn active' style={{ background: 'var(--note-clr-1)' }}
               onClick={(e) => changeBackgroundColor(e, 'var(--note-clr-1)')} />
            <button className='color-btn' style={{ background: 'var(--note-clr-2)' }}
               onClick={(e) => changeBackgroundColor(e, 'var(--note-clr-2)')} />
            <button className='color-btn' style={{ background: 'var(--note-clr-3)' }}
               onClick={(e) => changeBackgroundColor(e, 'var(--note-clr-3)')} />
            <button className='color-btn' style={{ background: 'var(--note-clr-4)' }}
               onClick={(e) => changeBackgroundColor(e, 'var(--note-clr-4)')} />

            <button className='delete-btn' onClick={deleteNote}>
               <img src={TrashIcon} alt="Trash Icon" />
            </button>
         </div>

         <button className='note-edit-btn' onClick={() => setEditorVisible(!editorVisible)} />

         <input className='title-input'
            type="text" value={title}
            placeholder='Insert a Title...'
            onChange={(e) => setTitle(e.target.value)} />

         <textarea
            className="description-input"
            value={description}
            rows={10}
            placeholder='Type Something Here...'
            onChange={(e) => setDescription(e.target.value)} />
      </div >
   )
};

export default Note;
