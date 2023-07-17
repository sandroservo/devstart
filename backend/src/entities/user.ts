export type User = {
    name: string;
    email: string;
    password: string;
    phone?: string | null;
    address?: string | null;
    number?: string | null;
    city?: string | null;
    state?: string | null;
    cep?: string | null;
    masterId?: number | null;
    maaster?: boolean | null
}