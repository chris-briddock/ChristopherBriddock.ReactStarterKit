/**
 * <summary>
 * Import the exampleAxiosInstance 
 * </summary>
 * <typeparam name="exampleAxiosInstance">
 * @type {import('exampleAxiosInstance').exampleAxiosInstance}
 * </typeparam>
 
 */
import exampleAxiosInstance from './exampleAxiosInstance';

/**
* *<summary>
 * Import AxiosResponse from axios
 * </summary>
* <typeparam name="AxiosRespose">
* @type {import('AxiosResponse').axios}
* </typeparam>
*/
import { AxiosResponse } from 'axios';

/**
 * <summary>
 * Interface defining the structure of the data expected in the API request.
 * </summary>
 */
interface IExampleData {
    email: string;
}

/**
 * <summary>
 * Function for making a POST request to an example endpoint.
 * </summary>
 * <param name="data">The data to be sent in the POST request.</param>
 * <returns>
 * @returns {Promise} that resolves with an AxiosResponse containing the API response data.
 * </returns>
 */
const ExamplePostRequest = async (data: IExampleData): Promise<AxiosResponse> => {
        const resp = await exampleAxiosInstance.post(`/ExampleEndpoint`, data);
        return resp;
}

/**
 * <summary>
 * Export the 'ExamplePostRequest' function as the default export of this module.
 * </summary>
 */
export default ExamplePostRequest;