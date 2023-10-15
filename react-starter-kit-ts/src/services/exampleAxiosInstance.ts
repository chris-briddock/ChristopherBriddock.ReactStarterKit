import axios, { AxiosInstance } from 'axios';

const serverAddress: string = 'localhost:7181';
const version: string = 'v1';
const serviceName: string = 'example-service';

const exampleAxiosInstance : AxiosInstance = axios.create({
    baseURL: `https://${serverAddress}/api/${version}/${serviceName}`,
    headers: {
      "Content-Type": "application/json"
    }
});

export default exampleAxiosInstance;