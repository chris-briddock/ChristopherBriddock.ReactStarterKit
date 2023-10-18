/**
 * @module MainEntry
 * This module initializes and renders the main application component.
 * @requires React
 * @requires ReactDOM
 * @requires App
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

/**
* <summary>
 * Calls the createRoot function from ReactDOM, gets the root element by ID, 
 * and renders the 'App' component.
 * </summary>
 * <returns> @returns {void} </returns>
 **/
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
