import { createContext, useContext, useEffect, useState } from 'react';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
   //Note 
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

   //Settings
   const [settings, setSettings] = useState(() => {
      const cache = localStorage.getItem('userSettings');

      const initialSetttings = {
         currentTheme: 0,
      }

      return cache ? JSON.parse(cache).settings : initialSetttings;
   })

   const themes = [
      {
         background: "#7C444F",
         surface: "#9F5255",
         primary: "#f18d45",
         clr1: "#D697C1",
         clr2: "#FDC7C7",
         clr3: "#F9F2BB",
         clr4: "#7F9BD4"
      },
      {
         background: "#2F4F4F",
         surface: "#4C8C8C",
         primary: "#9FB8B9",
         clr1: "#A0C5D8",
         clr2: "#7F9D85",
         clr3: "#9E7F6C",
         clr4: "#9E4C3A"
      },
      {
         background: "#4E3B31",
         surface: "#9A5B44",
         primary: "#F7B679",
         clr1: "#D6A18F",
         clr2: "#D2A66E",
         clr3: "#9A7F56",
         clr4: "#9A3E29"
      },
      {
         background: "#4C3B4D",
         surface: "#5D4C63",
         primary: "#B6948C",
         clr1: "#D28A9A",
         clr2: "#9E4F5F",
         clr3: "#D19F9D",
         clr4: "#A07B4E"
      },
      {
         background: "#1D2B33",
         surface: "#4B5C67",
         primary: "#9D9C99",
         clr1: "#3C6476",
         clr2: "#6C7D90",
         clr3: "#6E7F8D",
         clr4: "#A0B6C4"
      }
   ]

   useEffect(() => {
      const currentTheme = themes[settings.currentTheme];

      document.documentElement.style.setProperty('--background', currentTheme.background);
      document.documentElement.style.setProperty('--surface', currentTheme.surface);
      document.documentElement.style.setProperty('--primary', currentTheme.primary);
      document.documentElement.style.setProperty('--note-clr-1', currentTheme.clr1);
      document.documentElement.style.setProperty('--note-clr-2', currentTheme.clr2);
      document.documentElement.style.setProperty('--note-clr-3', currentTheme.clr3);
      document.documentElement.style.setProperty('--note-clr-4', currentTheme.clr4);

      localStorage.setItem('userSettings', JSON.stringify({ settings: settings }));
   }, [settings]);

   return (
      <NotesContext.Provider value={
         {
            notes,
            addNote,
            removeNoteById,
            attNoteById,
            settings,
            themes,
            setSettings
         }}>
         {children}
      </NotesContext.Provider>
   );
};

export const useNotes = () => useContext(NotesContext);