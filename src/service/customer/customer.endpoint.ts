const customerApiEndpoints = {
    getCustomers: '/customers',
};

export const customerByIdPath = (customerId: string) => {
    return customerApiEndpoints.getCustomers + `/${customerId}`
};

export default customerApiEndpoints;