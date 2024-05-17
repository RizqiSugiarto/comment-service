import CommentModel from "../model/commentModel";
import { IComment } from "../model/interface";

export default class CommentService {
    private commentModel = CommentModel.commentModel

    public async create(data: IComment): Promise<IComment> {
        const comment = new this.commentModel(data);
        return await comment.save();
    }

    public async update(id:string, data: Partial<IComment>): Promise<IComment | null> {
        return await this.commentModel.findByIdAndUpdate(id, data, {new : true}).exec();
    }

    public async getById(id: string): Promise<IComment | null> {
        return await this.commentModel.findOne({
            id : id,
            deleted_at : null
        }).exec();
    }

    public async delete(id: string): Promise<IComment | null> {
        return await this.commentModel.findByIdAndUpdate(
            id,
            {deleted_at: new Date},
        ).exec();
    }
    
}