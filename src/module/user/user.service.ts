import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/prismaService';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      }
    });

    if(userExists)
      throw new Error('Usuário já cadastrado para este e-mail.');

    data.password = await bcrypt.hash(data.password, 7);
    const user = await this.prisma.user.create({
      data
    });

    return {
      ...user,
      password: undefined
    };
  }

  async findAll() {
    const users = await this.prisma.user.findMany();

    return users.map((item) => { 
      delete item.password; 
      return item; 
    });
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        id: id
      }
    });

    return user;
  }

  async update(id: string, data: UpdateUserDto) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        id: id
      }
    });

    if(!userExists)
      throw new Error('O Usuário não encotrado.');

    data.password = userExists.password;
    await this.prisma.user.update({
      data,
      where: {
        id: id
      }
    });
  }

  async remove(id: string) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        id: id
      }
    });

    if(!userExists)
      throw new Error('O Usuário não encotrado.');

    await this.prisma.user.delete({
      where:{
        id: id
      }
    });
  }
}
