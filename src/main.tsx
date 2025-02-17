import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './editor/layouts'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <DndProvider backend={HTML5Backend}>
    <Layout />
  </DndProvider>
);
