import { useRef } from "react";
import { httpService } from "../http/http-service";
import {
  CustomerApiCalls,
  getAllCustomersResponse,
  getCustomerResponse,
} from "./customer.model";
import customerApiEndpoints, { getCustomerByIdPath } from "./customer.endpoint";

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
            getCustomerByIdPath(customerId)
        );
        return response;
      },
    };
  };
  const customerCallsRef = useRef<CustomerApiCalls>(generateApiCalls());

  return customerCallsRef.current;
};

export default useCustomerApi;
