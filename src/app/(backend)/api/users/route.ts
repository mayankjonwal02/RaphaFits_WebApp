// app/api/users/route.ts
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/app/model/User';





export async function GET(req: Request) {

    await connectDB();

    try {
        const users = await User.find();
        return NextResponse.json({ users : users, executed : true }, { status: 200 });
    } catch (error : any) {
        return NextResponse.json({ error: error.message, executed : false }, { status: 500 });
    }
    
}

export async function POST(req: Request) {

    await connectDB();
    try {
        const body = await req.json(); // Parse the incoming request body

        const {
            name,
            userid,
            password,
            address,
            contact,
            emailAddress,
            gender,
            dateOfBirth,
            occupation,
            gstNumber,
            emergencyContactNumber,
            amountPaid,
            paymentMode,
            paymentDoneOn,
            paymentDetails,
            status,
            height,
            weight,
            BMI,
            BMR,
            otherDetails,
        } = body;

        // Check if a user with the same userid already exists
        const existingUser = await User.findOne({ userid });
        if (existingUser) {
            return NextResponse.json({
                message: "User with this userid already exists.",
                executed: false
            }, { status: 400 });
        }

        // Create a new user if userid is unique
        const newUser = new User({
            name,
            userid,
            password, // Ideally, hash the password before saving
            address,
            contact,
            emailAddress,
            gender,
            dateOfBirth,
            occupation,
            gstNumber,
            emergencyContactNumber,
            amountPaid,
            paymentMode,
            paymentDoneOn,
            paymentDetails,
            status,
            height,
            weight,
            BMI,
            BMR,
            otherDetails,
        });

        await newUser.save();

        return NextResponse.json({ 
            message: "User registered successfully", 
            user: newUser, 
            executed: true 
        }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({
            message: "Error registering user",
            error: error.message,
            executed: false
        }, { status: 500 });
    }
}
