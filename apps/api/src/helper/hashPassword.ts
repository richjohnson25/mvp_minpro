import bcrypt from 'bcrypt';

const saltRounds = 10;

export const hashPassword = async(password: string) => {
    return await bcrypt.hash('userPassword', saltRounds)
}

export const comparePassword = async(passwordReq: string, passwordDb: string) => {
    return await bcrypt.compare(passwordReq, passwordDb)
}