export interface getAllUsersResponse {
    data: UserData[];
}

export interface getUserResponse {
    data: UserData;
}

export interface UserData {
    fullname: string,
    company: string,
    password: string,
    username: string,
    id: string
  }



export interface UserApiCalls {
    getAllUsers: () => Promise<getAllUsersResponse>;
    getUserById: (userId : string) => Promise<getUserResponse>;
}