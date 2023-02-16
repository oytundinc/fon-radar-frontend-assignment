import { useRef } from "react";
import { httpService } from "../http/http-service";
import {
  CustomerApiCalls,
  CustomerData,
  getAllCustomersResponse,
  getCustomerResponse,
} from "./customer.model";
import customerApiEndpoints, { customerByIdPath } from "./customer.endpoint";

const useCustomerApi = (): CustomerApiCalls => {
  const generateApiCalls = (): CustomerApiCalls => {
    return {
      getAllCustomers: async () => {
        const response: getAllCustomersResponse = await httpService.client.get(
          customerApiEndpoints.getCustomers
        );
        return response;
      },
      getCustomerById: async (customerId: string) => {
        const response: getCustomerResponse = await httpService.client.get(
          customerByIdPath(customerId)
        );
        return response;
      },
      addCustomer: async (payload: CustomerData) => {
        const response: getCustomerResponse = await httpService.client.post(
          customerApiEndpoints.getCustomers, payload
        );
        return response;
      },
      updateCustomerById: async (customerId: string, payload: CustomerData) => {
        const response: getCustomerResponse = await httpService.client.put(
          customerByIdPath(customerId), payload
        );
        return response;
      },
      deleteCustomerById: async (customerId: string) => {
        const response: getCustomerResponse = await httpService.client.delete(
          customerByIdPath(customerId)
        );
        return response;
      },
    };
  };
  const customerCallsRef = useRef<CustomerApiCalls>(generateApiCalls());

  return customerCallsRef.current;
};

export default useCustomerApi;
