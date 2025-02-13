import './Note.css';
import TrashIcon from '../Assets/trash_icon.svg'
import { use, useEffect, useState } from 'react';

const Note = (props) => {
   const [editorVisible, setEditorVisible] = useState(false);
   const [backgroundColor, setBackgroundColor] = useState(props.color)
   const [noteTitle, setNoteTitle] = useState(props.title)
   const [noteDescription, setNoteDescription] = useState(props.description)

   const changeBackgroundColor = (e, color) => {
      const color_btns = document.getElementsByClassName('color-btn');

      for (let i = 0; i < color_btns.length; i++) {
         color_btns[i].classList.remove('active');
      }

      e.target.classList.add('active');

      setBackgroundColor(color);
   }

   return (
      <div className='note' style={{ background: backgroundColor }}>
         <div className={editorVisible ? 'note-editor visible' : 'note-editor'} >
            <button className='color-btn active' style={{ background: 'var(--note-clr-1)' }} onClick={(e) => changeBackgroundColor(e, 'var(--note-clr-1)')}></button>
            <button className='color-btn' style={{ background: 'var(--note-clr-2)' }} onClick={(e) => changeBackgroundColor(e, 'var(--note-clr-2)')}></button>
            <button className='color-btn' style={{ background: 'var(--note-clr-3)' }} onClick={(e) => changeBackgroundColor(e, '-var(--note-clr-3)')}></button>
            <button className='color-btn' style={{ background: 'var(--note-clr-4)' }} onClick={(e) => changeBackgroundColor(e, 'var(--note-clr-4)')}></button>
            <button className='delete-btn'>
               <img src={TrashIcon} alt="Trash Icon" />
            </button>
         </div>

         <button className='note-edit-btn' onClick={() => setEditorVisible(!editorVisible)} />

         <input className='title-input' type="text" value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} />
         <textarea
            className="description-input"
            value={noteDescription}
            onChange={(e) => setNoteDescription(e.target.value)}
         />
      </div >
   )
};

export default Note;
