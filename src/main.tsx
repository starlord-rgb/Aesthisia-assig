// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import {FullTime} from './App.tsx'
// import './index.css'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//      <FullTime />
//   </StrictMode>,
// )
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);