/**
 * <summary>
 * Import the Axios library and AxiosInstance type from 'axios'.
 * </summary>
 * <typeparam name="axios">
 * @type {import('axios').axios}
 * </typeparam>
 * <typeparam name="AxiosInstance">
 * @type {import('AxiosInstance').axios}
 * </typeparam>
 */
import axios, { AxiosInstance } from 'axios';

/**
 * <summary>
 * The address of the server.
 * </summary>
 */
const serverAddress: string = 'localhost:7181';
/**
 * <summary>
 * The API version.
 * </summary>
 */
const version: string = 'v1';
/**
 * <summary>
 * The name of the service.
 * </summary>
 */
const serviceName: string = 'example-service';

/**
 * <summary>
 * Create an Axios instance for the 'example-service' API.
 * </summary>
 * <returns>
 * An instance of AxiosInstance for making API requests.
 * </returns>
 */
const exampleAxiosInstance: AxiosInstance = axios.create({
  /**
   * <summary>
   * The base URL for API requests.
   * </summary>
   */
  baseURL: `https://${serverAddress}/api/${version}/${serviceName}`,
  
  /**
   * <summary>
   * Set the request content type to JSON.
   * </summary>
   */
  headers: {
    "Content-Type": "application/json"
  }
});

/**
 * <summary>
 * Export the created Axios instance for use in other parts of the application.
 * </summary>
 */
export default exampleAxiosInstance;