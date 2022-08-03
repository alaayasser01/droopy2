import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </DndProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
