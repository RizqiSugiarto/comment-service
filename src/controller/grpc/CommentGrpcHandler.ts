import { commentServiceClient } from "../../proto/comment_grpc_pb";
import { createCommentRequest, updateCommentRequest, getCommentByIdRequest, deleteRequest } from "../../proto/comment_pb";

interface CommentController {
    createComment(username: string, comment: string, userId: string): Promise<string>;
    updateComment(username: string, comment: string, userId: string): Promise<string>;
    getCommentById(userId: string): Promise<Comment | null>;
    deleteComment(userId: string): Promise<string>;
}

interface Comment {
    id: string;
    username: string;
    comment: string;
    userId: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export default class CommentControllerImpl implements CommentController {
    private client: commentServiceClient;

    constructor(client: commentServiceClient) {
        this.client = client;
    }

    async createComment(username: string, commentText: string, userId: string): Promise<string> {
        const request = new createCommentRequest();
        request.setUsername(username);
        request.setComment(commentText);
        request.setUserid(userId);

        return new Promise<string>((resolve, reject) => {
            this.client.createComment(request, (err, response) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(response.getMessage());
                }
            });
        });
    }

    async updateComment(username: string, commentText: string, userId: string): Promise<string> {
        const request = new updateCommentRequest();
        request.setUsername(username);
        request.setComment(commentText);
        request.setUserid(userId);

        return new Promise<string>((resolve, reject) => {
            this.client.updateComment(request, (err, response) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(response.getMessage());
                }
            });
        });
    }

    async getCommentById(userId: string): Promise<Comment | null> {
        const request = new getCommentByIdRequest();
        request.setUserid(userId);

        return new Promise<Comment | null>((resolve, reject) => {
            this.client.getCommentById(request, (err, response) => {
                if (err) {
                    reject(err);
                } else {
                    const comment = response.getComment();
                    if (comment) {
                        resolve({
                            id: comment.getId(),
                            username: comment.getUsername(),
                            comment: comment.getComment(),
                            userId: comment.getUserid(),
                            createdAt: comment.getCreatedAt()?.toDate() || undefined,
                            updatedAt: comment.getUpdatedAt()?.toDate() || undefined,
                            deletedAt: comment.getDeletedAt()?.toDate() || undefined,
                        });
                    } else {
                        resolve(null);
                    }
                }
            });
        });
    }

    async deleteComment(userId: string): Promise<string> {
        const request = new deleteRequest();
        request.setUserid(userId);

        return new Promise<string>((resolve, reject) => {
            this.client.deleteComment(request, (err, response) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(response.getMessage());
                }
            });
        });
    }
}


