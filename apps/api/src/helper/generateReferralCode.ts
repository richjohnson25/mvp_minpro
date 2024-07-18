export default function generateReferralCode(length: number = 8): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let referralCode = '';

    for(let i = 0; i < length; i++){
        referralCode += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    return referralCode
}