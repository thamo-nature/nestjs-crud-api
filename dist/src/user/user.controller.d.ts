import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly service;
    constructor(service: UserService);
    create(dto: CreateUserDto): Promise<import("./user.entity").User>;
    findAll(): Promise<import("./user.entity").User[]>;
    findOne(id: string): Promise<import("./user.entity").User>;
    update(id: string, dto: UpdateUserDto): Promise<import("./user.entity").User>;
    remove(id: string): Promise<import("./user.entity").User>;
}
