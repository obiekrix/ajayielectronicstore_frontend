import { AdminModel } from "./admin-model";
import { CategoryModel } from "./category-model";
import { BrandModel } from "./brand-model";

export class ProductModel {
    constructor(
        public category: CategoryModel,
        public brand: BrandModel,
        public id?: number,
        public description?: string,
        public features?: string,
        public costPrice?: number,
        public sellingPrice?: number,
        public orders?: number,
        public lastOrder?: Date,
        public remainingQuantity?: number,
        public creationDate?: Date,
        public enabled?: boolean,
        public imageUrl?: string,
        public admin?: AdminModel
    ) { 
    }
}
// {
//     "id": 9,
//     "description": "60` Ultra-HD",
//     "features": "1.5HP",
//     "costPrice": 45646,
//     "sellingPrice": 651651,
//     "orders": 0,
//     "lastOrder": null,
//     "remainingQuantity": 32,
//     "creationDate": 1538141704791,
//     "enabled": true,
//     "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyJiG1h8nC6DTSWy6i4tOsul6bR9Hn5Dvm53rEv6yMpiasyX4o",
//     "admin": {
//       "id": 1,
//       "firstName": "Admin",
//       "lastName": "Admin",
//       "email": "admin@email.com",
//       "password": "admin",
//       "creationDate": 1538135693405,
//       "enabled": true
//     },
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
//     },
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
//     },
//     "orderedStocks": []
//   }