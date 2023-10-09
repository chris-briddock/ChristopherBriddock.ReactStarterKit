import axios from 'axios';

const serverAddress: string = 'localhost:7181';
const version: string = 'v1';
const serviceName: string = 'example-service';

const exampleAxiosInstance = axios.create({
    baseURL: `https://${serverAddress}/api/${version}/${serviceName}`,
    headers: {
      "Content-Type": "application/json"
    }
  });

export default exampleAxiosInstance;