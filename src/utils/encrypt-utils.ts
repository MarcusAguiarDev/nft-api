import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

export function encrypt(plainText: string) {
    const salt = bcrypt.genSaltSync(SALT_ROUNDS);
    const hash = bcrypt.hashSync(plainText, salt);
    return hash
}

export function compare(plainText: string, hash: string) {
    return bcrypt.compareSync(plainText, hash)
}
