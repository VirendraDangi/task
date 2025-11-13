import mongoose from "mongoose";
export declare const todoModel: mongoose.Model<{
    title: string;
    completed: boolean;
    priority: "low" | "medium" | "high";
    dueDate?: NativeDate | null;
    user?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    title: string;
    completed: boolean;
    priority: "low" | "medium" | "high";
    dueDate?: NativeDate | null;
    user?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    title: string;
    completed: boolean;
    priority: "low" | "medium" | "high";
    dueDate?: NativeDate | null;
    user?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    title: string;
    completed: boolean;
    priority: "low" | "medium" | "high";
    dueDate?: NativeDate | null;
    user?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    title: string;
    completed: boolean;
    priority: "low" | "medium" | "high";
    dueDate?: NativeDate | null;
    user?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    title: string;
    completed: boolean;
    priority: "low" | "medium" | "high";
    dueDate?: NativeDate | null;
    user?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=todo.model.d.ts.map