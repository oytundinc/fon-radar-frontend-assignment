import { useRef } from 'react';
import { httpService } from '../http/http-service';
import {
    CustomerApiCalls, getAllCustomersResponse
} from './customer.model';
import customerApiEndpoints from './customer.endpoint';

const useCustomerApi = (): CustomerApiCalls => {
    const generateApiCalls = (): CustomerApiCalls => {
        return {
            getAllCustomers: async () => {
                const response: getAllCustomersResponse =
                    await httpService.client.get(
                        customerApiEndpoints.getAllCustomers
                    );
                return response;
            },
        };
    };
    const customerCallsRef = useRef<CustomerApiCalls>(generateApiCalls());

    return customerCallsRef.current;
};

export default useCustomerApi;
