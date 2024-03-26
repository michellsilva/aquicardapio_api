import { Role } from "src/module/auth/enuns/Role ";

export class User {
    id: String;
    email: String;
    name: String;
    password: String;
    ativo: Boolean;
    roles: Role;
}
