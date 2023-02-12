const customerApiEndpoints = {
    getCustomers: '/customers',
};

export const getCustomerByIdPath = (customerId: string) => {
    return customerApiEndpoints.getCustomers + `/${customerId}`
};

export default customerApiEndpoints;