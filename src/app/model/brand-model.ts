import { AdminModel } from "./admin-model";

export class BrandModel{
    constructor(
        private id?: number,
        private name?: string,
        private creationDated?: Date,
        private enabled?: boolean,
        private admin?: AdminModel
    ){}
}

//     "brand": {
//       "id": 3,
//       "name": "Haier Thermocool",
//       "creationDate": 1538135693405,
//       "enabled": true,
//       "admin": {
//         "id": 2,
//         "firstName": "Christian",
//         "lastName": "Nwafor",
//         "email": "obiekrix@email.com",
//         "password": "admin",
//         "creationDate": 1538135693405,
//         "enabled": true
//       }
//     }