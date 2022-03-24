import { IsString, IsNumber } from 'class-validator';

export class UsersDto {
    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    password: string;
}
