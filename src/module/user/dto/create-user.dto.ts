import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {

    name: string

    password: string

    email: string
}
