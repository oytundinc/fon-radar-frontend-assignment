import { useRef } from "react";
import { httpService } from "../http/http-service";
import {
  UserApiCalls,
  getAllUsersResponse,
  getUserResponse,
} from "./user.model";
import userApiEndpoints, { getUserIdPath } from "./user.endpoint";

const useUserApi = (): UserApiCalls => {
  const generateApiCalls = (): UserApiCalls => {
    return {
      getAllUsers: async () => {
        const response: getAllUsersResponse = await httpService.client.get(
          userApiEndpoints.getUsers
        );
        return response;
      },
      getUserById: async (userId: string) => {
        const response: getUserResponse = await httpService.client.get(
            getUserIdPath(userId)
        );
        return response;
      },
    };
  };
  const userCallsRef = useRef<UserApiCalls>(generateApiCalls());

  return userCallsRef.current;
};

export default useUserApi;
