import { createContext, useContext, useState } from 'react';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
   const noteList = [
      {
         id: '1739580966042-256',
         title: '1',
         description: '1',
         color: 'var(--note-clr-1)'
      },
      {
         id: '1739580966505-479',
         title: '2',
         description: '2',
         color: 'var(--note-clr-1)'
      },
      {
         id: '1739581041616-641',
         title: '3',
         description: '3',
         color: 'var(--note-clr-1)'
      },
      {
         id: '1739581042393-234',
         title: '4',
         description: '4',
         color: 'var(--note-clr-1)'
      }
   ]

   const [notes, setNotes] = useState(noteList);

   const addNote = () => {
      const newNote = {
         id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
         title: '',
         description: '',
         color: 'var(--note-clr-1)',
      }

      setNotes(prev => [...prev, newNote])
   }

   const removeNoteById = (id) => {
      setNotes(prev => prev.filter(note => note.id !== id));
   }

   return (
      <NotesContext.Provider value={{ notes, addNote, removeNoteById }}>
         {children}
      </NotesContext.Provider>
   );
};

export const useNotes = () => useContext(NotesContext);