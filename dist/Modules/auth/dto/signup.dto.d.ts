import { UserType } from "../../../types/enums";

export declare class SignUpDto {
    phone: string;
    email: string;
    userType: UserType;
    name: string;
    password: string;
    businessName: string;
    location: string;
    address: string;
    specificCarBrands: string[];
    openingFrom: string;
    closingAt: string;
    amenities: string[];
    specialization: string[];
}
