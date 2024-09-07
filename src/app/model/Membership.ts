import mongoose, { Schema, Document } from 'mongoose';

interface IMembership extends Document {
    title: string;
    startdate: string;
    enddate: string;
    price: string;
    
    classes: string[
        
    ],
    registered: string[]; // Array of user IDs
}

const MembershipSchema: Schema = new Schema({
    title: { type: String, required: true },
    startdate: { type: String, required: true },
    enddate: { type: String, required: true },
    price: { type: String, required: true },
    classes:[{ type: String, required: true }],
    registered: { type: [String], default: [] }
}, { timestamps: true });


const db = mongoose.connection.useDb('RaphaDB');
const Membership = db.model<IMembership>('Membership', MembershipSchema);

export default Membership;
