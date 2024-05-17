export interface IComment {
    id: string;
    username: string;
    comment: string;
    userId: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
}
