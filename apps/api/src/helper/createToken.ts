import jwt from 'jsonwebtoken';

export const createToken = ({userId, userRole}: {userId: string, userRole: string}) => {
    return jwt.sign({userId, userRole}, 'minpro2802', {algorithm: 'HS256', expiresIn: '1d'})
}