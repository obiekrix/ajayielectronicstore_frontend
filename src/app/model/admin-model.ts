export class AdminModel{
    constructor(
        private id: number,
        private firstName: string,
        private lastName: string,
        private email: string,
        private password: string,
        private creationDated: Date,
        private enabled: boolean
    ){}
}


//     "admin": {
//       "id": 1,
//       "firstName": "Admin",
//       "lastName": "Admin",
//       "email": "admin@email.com",
//       "password": "admin",
//       "creationDate": 1538135693405,
//       "enabled": true
//     },