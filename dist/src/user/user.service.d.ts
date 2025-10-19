import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
export declare class UserService {
    private repo;
    constructor(repo: Repository<User>);
    Create(data: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, data: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<User>;
}
