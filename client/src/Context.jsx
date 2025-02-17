import { createContext, useContext, useEffect, useState } from 'react';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
   const [notes, setNotes] = useState(() => {
      const cache = localStorage.getItem('userNotes');
      return cache ? JSON.parse(cache).notes : [];
   });

   useEffect(() => {
      localStorage.setItem('userNotes', JSON.stringify({ notes: notes }));
   }, [notes]);

   const addNote = () => {
      const newNote = {
         id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
         title: '',
         description: '',
         color: 'var(--note-clr-1)',
      }

      setNotes(prev => [...prev, newNote]);
   }

   const removeNoteById = (id) => {
      setNotes(prev => prev.filter(note => note.id !== id));
   }

   const attNoteById = (attNote) => {
      setNotes(prev => prev.map(note => attNote.id == note.id ? attNote : note));
   }

   return (
      <NotesContext.Provider value={{ notes, addNote, removeNoteById, attNoteById }}>
         {children}
      </NotesContext.Provider>
   );
};

export const useNotes = () => useContext(NotesContext);