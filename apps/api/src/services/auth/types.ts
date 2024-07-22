export interface IUser {
    uid?: string;
    first_name: string;
    last_name: string;
    username: string;
    phone_number: string;
    role: Role;
    email: string;
    password: string;
    referral_code: string;
    points: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

enum Role {
    PARTICIPANT = "PARTICIPANT",
    ORGANIZER = "ORGANIZER"
}