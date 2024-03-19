import { ApiProperty } from "@nestjs/swagger"
import { IsEmail } from "class-validator"

export class CreateUserDto {

    name: string

    password: string

    @IsEmail()
    email: string
}
