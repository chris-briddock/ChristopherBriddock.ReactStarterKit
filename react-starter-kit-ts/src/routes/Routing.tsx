/**
 * <summary>
 * Import the Axios library 'axios'.
 * </summary>
 * <typeparam name="axios">
 * @type {import('axios').axios}
 * </typeparam>
 * <typeparam name="AxiosInstance">
 * @type {import('AxiosInstance').axios}
 * </typeparam>
 */
import Home from "../pages/Home";

/**
 * <summary>
 * An array of route objects used for defining routes in the application.
 * </summary>
 */
const Routing = [
    {
        /**
         * <summary>
         * The path for this route.
         * </summary>
         */
        path: '/',
        /**
         * <summary>
         * The element to render when this route is matched.
         * </summary>
        */
        element: <Home />
    }
];

/**
 * <summary>
 * Export the 'Routing' component as the default export of this module.
 * </summary>
 * @default
**/
export default Routing;