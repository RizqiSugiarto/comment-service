import { Schema, model} from 'mongoose';
import { IComment } from './interface';


export default class CommentModel {
    public static commentSchema = new Schema<IComment>({
        id: { type: String, required: true },
        username: { type: String, required: true },
        comment: { type: String, required: true },
        userId: { type: String, required: true },
        created_at: { type: Date, required: true },
        updated_at: { type: Date, required: true },
        deleted_at: { type: Date, default: null }
    });

    public static commentModel = model<IComment>('Comment', CommentModel.commentSchema)

}


