const userApiEndpoints = {
    getUsers: '/users',
};

export const getUserIdPath = (userId: string) => {
    return userApiEndpoints.getUsers + `/${userId}`
};

export default userApiEndpoints;