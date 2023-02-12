export interface getAllCustomersResponse {
    data: CustomerData[];
}

export interface getCustomerResponse {
    data: CustomerData;
}

export interface CustomerData {
    companyName: string;
    taxNumber: number;
    taxOffice: string;
    invoiceCount: number;
    contactNumber: string;
    id: string;
}

export interface CustomerApiCalls {
    getAllCustomers: () => Promise<getAllCustomersResponse>;
    getCustomerById: (customerId : string) => Promise<getCustomerResponse>;
}
