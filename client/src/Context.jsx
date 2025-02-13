import { createContext, useState } from 'react';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
   const noteList = [
      {
         title: '1',
         description: '1',
         color: 'var(--note-clr-1)',
      },
      {
         title: '2',
         description: '2',
         color: 'var(--note-clr-1)',
      },
      {
         title: '3',
         description: '3',
         color: 'var(--note-clr-1)',
      },
      {
         title: '4',
         description: '4',
         color: 'var(--note-clr-1)',
      },
   ]

   const [notes, setNotes] = useState(noteList);

   return (
      <NotesContext.Provider value={{ notes, setNotes }}>
         {children}
      </NotesContext.Provider>
   );
};