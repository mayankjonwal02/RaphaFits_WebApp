import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Class from '@/app/model/Classes';



export async function GET(req: Request, { params }: { params: { id: string } })
{
    await connectDB();
    const { id } = params;
    try {
        const fetchedclass = await Class.findOne({ _id: id });
        if (fetchedclass) {
            return NextResponse.json({ class : fetchedclass,message: "Class fetched successfully.", executed : true }, { status: 200 });
        }
        return NextResponse.json({ message:"Class not found", executed : false }, { status: 200 });
    } catch (error : any) {
        return NextResponse.json({ error: error.message, executed : false }, { status: 500 });
    }   
        }

export async function POST(req: Request, { params }: { params: { id: string } }) {
    await connectDB();
    const { id } = params;
    const body = await req.json();
    const userid = body.userid
    try {
        const user = await Class.findOne({ _id: id });
        if (user) {
            user.registered.push(userid);
            await user.save();
            return NextResponse.json({  executed : true ,message : "User registered successfully."}, { status: 200 });
        }
        return NextResponse.json({ error: "User not found", executed : false }, { status: 404 });
    } catch (error : any) {
        return NextResponse.json({ error: error.message, executed : false }, { status: 500 });
    }
}



export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    await connectDB();
    const { id } = params;
    const body = await req.json();
    const userid = body.userid
    try {
        const user = await Class.findOne({ _id: id });
        if (user) {
            user.registered = user.registered.filter((id) => id !== userid);
            await user.save();
            return NextResponse.json({  executed : true ,message : "User registered successfully."}, { status: 200 });
        }
        return NextResponse.json({ error: "User not found", executed : false }, { status: 404 });
    } catch (error : any) {
        return NextResponse.json({ error: error.message, executed : false }, { status: 500 });
    }
}