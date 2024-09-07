import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/app/model/User';



export async function GET(req: Request, {params} : {params : {userid : string}}) {
    await connectDB();
    const {userid} = params
    try {
        const user = await User.findOne({ userid: userid });
        if (user) {
            return NextResponse.json({ user : user,message: "User fetched successfully.", executed : true }, { status: 200 });
        }
        return NextResponse.json({ message:"User not found", executed : false }, { status: 200 });
    } catch (error : any) {
        return NextResponse.json({ error: error.message, executed : false }, { status: 500 });
    }
}



export async function PUT(req: Request, {params} : {params : {userid : string}})
{
    await connectDB();
    const {userid} = params
    const body = await req.json();
    const {updatedata} = body
    try {
        const user = await User.findOne({ userid: userid });
        if (user) {
            user.set(updatedata);
            await user.save();
            return NextResponse.json({  executed : true ,message : "User updated successfully."}, { status: 200 });
        }

        return NextResponse.json({ error: "User not found", executed : false }, { status: 404 });
    } catch (error : any) {
        return NextResponse.json({ error: error.message, executed : false }, { status: 500 });
    }
}