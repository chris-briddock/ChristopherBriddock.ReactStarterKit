import exampleAxiosInstance from './exampleAxiosInstance';
import { AxiosResponse } from 'axios';

interface IExampleData {
    email: string;
}

const ExamplePostRequest = async (data: IExampleData): Promise<AxiosResponse> => {
        const resp = await exampleAxiosInstance.post(`/ExampleEndpoint`, data);
        return resp;
}

export default ExamplePostRequest;