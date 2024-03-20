import {
    IsEmail,
    IsString,
    Matches,
    MaxLength,
    MinLength,
  } from 'class-validator';

export class CreateUserDto {

  @IsString()
  name: string

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'A senha deve conter (Letras maiúsculas, Letras minúsculas, Caracter especial e Números)',
  })
  password: string

  @IsEmail()
  email: string
}
