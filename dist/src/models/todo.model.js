import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        trim: true,
        maxlength: [200, "title is too long"]
    },
    completed: {
        type: Boolean,
        default: false
    },
    dueDate: {
        type: Date,
    },
    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "medium",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userModel"
    }
}, {
    timestamps: true
});
export const todoModel = mongoose.model("todoModel", todoSchema);
//# sourceMappingURL=todo.model.js.map