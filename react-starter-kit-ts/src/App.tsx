/**
 * <summary>
 * Import the 'Routing' module from the './routes/Routing' file.
 * </summary>
 * <typeparam name="RoutingType">
 * @type {import('./routes/Routing').RoutingType}
 * </typeparam>
 */
import Routing from './routes/Routing';
/**
 * <summary>
 * Import necessary components from external libraries.
 * </summary>
 * <typeparam name="BrowserRouter">
 * @type {import('react-router-dom').BrowserRouter}
 * </typeparam>
 * <typeparam name="Routes">
 * @type {import('react-router-dom').Routes}
 * </typeparam>
 * <typeparam name="Route">
 * @type {import('react-router-dom').Route}
 * </typeparam>
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/**
 * <summary>
 * Import the 'RecoilRoot' component for state management with Recoil.
 * </summary>
 * <typeparam name="RecoilRoot">
 * @type {import('recoil').RecoilRoot}
 * </typeparam>
 */
import { RecoilRoot } from 'recoil';

/**
* <summary>
 * Define the main functional component 'App'.
 * </summary>
 * <returns> @returns {JSX.Element} </returns>
 **/
function App() {

  return (
    <RecoilRoot>
      <BrowserRouter>
      {/* <Header /> */}
        <Routes>
          {Routing.map(({ path, element }, key) => (
            <Route key={key} path={path} element={element} />
          ))}
        </Routes>
        {/* <Footer /> */}
        </BrowserRouter>
      </RecoilRoot>
  )
}

/**
 * <summary>
 * Export the 'App' component as the default export of this module.
 * </summary>
** @default
 */
export default App
