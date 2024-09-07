import mongoose, { Schema, Document } from 'mongoose';

interface IClass extends Document {
    title: string;
    subtitle: string;
    description: string;
    date: string;
    time: string; // Assuming time is stored as a string, e.g., "14:00"
    slots: number;
    trainerName: string;
    price: string;
    registered: string[]; // Array of user IDs
}

const ClassSchema: Schema = new Schema({
    title: { type: String, required: true },
    subtitle: { type: String },
    description: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true }, // Adjust if time format differs
    slots: { type: Number, required: true },
    trainerName: { type: String, required: true },
    price: { type: String, required: true },
    registered: { type: [String], default: [] } // Array of user IDs
}, { timestamps: true });


const db = mongoose.connection.useDb('RaphaDB');
const Class = db.model<IClass>('Class', ClassSchema);

export default Class;
