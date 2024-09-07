import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
    name: string;
    userid : string;
    password: string;
    address: string;
    contact: string;
    emailAddress: string;
    gender: string;
    dateOfBirth: Date;
    occupation: string;
    gstNumber: string;
    emergencyContactNumber: string;
    amountPaid: number;
    paymentMode: string;
    paymentDoneOn: Date;
    paymentDetails: string;
    status: string;
    height: number;
    weight: number;
    BMI: number;
    BMR: number;

    otherDetails: string;
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    userid : { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
    emailAddress: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    occupation: { type: String, required: true },
    gstNumber: { type: String, required: true, unique: true },
    emergencyContactNumber: { type: String, required: true },
    amountPaid: { type: Number, required: true },
    paymentMode: { type: String, required: true },
    paymentDoneOn: { type: Date, required: true },
    paymentDetails: { type: String },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    BMI: { type: Number },
    BMR: { type: Number },
    status: { type: String, default: 'active' },
    otherDetails: { type: String },
}, { timestamps: true });

const db = mongoose.connection.useDb('RaphaDB');
const User = db.model<IUser>('User', UserSchema);

export default User;
