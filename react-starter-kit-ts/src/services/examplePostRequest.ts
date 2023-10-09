import exampleAxiosInstance from './exampleAxiosInstance';

interface ExampleData {
    email: string;
}

const ExamplePostRequest = async (data: ExampleData) => {
        const resp = await exampleAxiosInstance.post(`/ExampleEndpoint`, data);
        return resp;
}

export default ExamplePostRequest;