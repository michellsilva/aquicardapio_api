import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prismaService';
import * as bcrypt from 'bcrypt';
import { UserPayload } from './entities/UserPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './entities/UserToken';
import { UnauthorizedError } from './errors/unauthorized.error';

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly jwtService: JwtService
    ) {}

    login(user: any): UserToken {
        const payload: UserPayload = {
            sub: user.id,
            email: user.email,
            name: user.name,
            roles: user.roles,
        };

        const jwtToken = this.jwtService.sign(payload);

        return {
            access_token: jwtToken,
        };
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

        throw new UnauthorizedError(
            'Email address or password provided is incorrect.',
          );
    }
}
