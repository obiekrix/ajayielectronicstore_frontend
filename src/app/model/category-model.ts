import { AdminModel } from "./admin-model";

export class CategoryModel{
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public creationDated?: Date,
        public enabled?: boolean,
        public admin?: AdminModel
    ){}
}

//     "category": {
//       "id": 3,
//       "name": "Refrigerator",
//       "description": "Gives you the best preservation and freshness to your vegies",
//       "creationDate": 1538135693405,
//       "enabled": true,
//       "admin": {
//         "id": 1,
//         "firstName": "Admin",
//         "lastName": "Admin",
//         "email": "admin@email.com",
//         "password": "admin",
//         "creationDate": 1538135693405,
//         "enabled": true
//       }