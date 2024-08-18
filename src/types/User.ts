export interface User {
    login: string;
    id: number;
}

export interface UserDetailedData {
    id: number;
    login: string;
    avatar_url: string;
    followers: number;
    following: number;
    created_at: string;
    bio: string | null;
    location: string | null;
    name: string;
    url: string;
}
