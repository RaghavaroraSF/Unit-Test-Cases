export const my_URL = 'http://localhost:3000/';

export interface role{
    name: string;
    key: string;
    description: string;
    created_on?: Date;
    modified_on?: Date;
};

export interface customer{
    id?: number;
    name: string;
    website: string;
    address: string;
    created_on?: Date;
    modified_on?: Date;
}

