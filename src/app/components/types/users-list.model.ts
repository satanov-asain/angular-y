export interface IUser {
        id: number;
        name: string;
        username: string;
        email: string;
        phone: string;
        website: string;
        income: number;
        company: IUserCompany;
        address: IUserAddress;
}

export interface IUserCompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface IUserAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IUserAddressGeo;
}

export interface IUserAddressGeo{
    lat: string,
    lng: string,
}