import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prismaService';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}

    login(user: any) {
        throw new Error('Method not implemented.');
    }

    async validateUser(email: string, password: string) {
        const user = await this.prisma.user.findFirst({
            where: {
                email: email
            }
        });

        if(user) {
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (isPasswordValid) {
                return {
                    ...user,
                    password: undefined
                }
            }
        }
    }
}
