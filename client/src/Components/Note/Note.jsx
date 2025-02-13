import './Note.css';
import TrashIcon from '../Assets/trash_icon.svg'
import { use, useState } from 'react';

const Note = (props) => {

   const [editorVisible, setEditorVisible] = useState(false);
   const [backgroundColor, setBackgroundColor] = useState('var(--blue)')
   const [noteTitle, setNoteTitle] = useState('Note Title')
   const [noteDescription, setNoteDescription] = useState('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi sequi consectetur animi voluptatum, quod assumenda porro in alias rem reprehenderit veritatis laudantium eos tempore quae sapiente consequatur temporibus quo dignissimos.')

   const changeBackgroundColor = (e, color) => {
      const color_btns = document.getElementsByClassName('color-btn');

      for (let i = 0; i < color_btns.length; i++) {
         color_btns[i].classList.remove('active');
      }

      e.target.classList.add('active');

      setBackgroundColor(color);
   }

   const descriptionOnChange = (e) => {
      e.target.style.height = `${e.target.scrollHeight}px`;
      setNoteDescription(e.target.value);
   };

   return (
      <div className='note' style={{ background: backgroundColor }}>
         <div className={editorVisible ? 'note-editor visible' : 'note-editor'} >
            <button className='color-btn active' style={{ background: 'var(--blue)' }} onClick={(e) => changeBackgroundColor(e, 'var(--blue)')}></button>
            <button className='color-btn' style={{ background: 'var(--yellow)' }} onClick={(e) => changeBackgroundColor(e, 'var(--yellow)')}></button>
            <button className='color-btn' style={{ background: 'var(--pink)' }} onClick={(e) => changeBackgroundColor(e, 'var(--pink)')}></button>
            <button className='color-btn' style={{ background: 'var(--purple)' }} onClick={(e) => changeBackgroundColor(e, 'var(--purple)')}></button>
            <button className='delete-btn'>
               <img src={TrashIcon} alt="Trash Icon" />
            </button>
         </div>

         <button className='note-edit-btn' onClick={() => setEditorVisible(!editorVisible)} />

         {editorVisible ? (
            <>
               <input className='title-input' type="text" value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} />
               <textarea
                  className="description-input"
                  value={noteDescription}
                  onChange={descriptionOnChange} />
            </>
         ) : (
            <>
               <h2>{noteTitle}</h2>
               <p>{noteDescription}</p>
            </>
         )}
      </div >
   )
};

export default Note;
