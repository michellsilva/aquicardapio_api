import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(data: CreateUserDto): Promise<{
        id: string;
        email: string;
        name: string;
        password: string;
        ativo: boolean;
    }>;
    findAll(): Promise<{
        id: string;
        email: string;
        name: string;
        password: string;
        ativo: boolean;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        email: string;
        name: string;
        password: string;
        ativo: boolean;
    }>;
    update(id: string, data: UpdateUserDto): Promise<void>;
    remove(id: string): Promise<void>;
}
