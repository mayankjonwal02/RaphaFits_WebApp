import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Membership from '@/app/model/Membership';


export async function POST(req: Request, { params }: { params: { id: string } }) {
    await connectDB();
    const { id } = params;
    const body = await req.json();
    const classid = body.classid
    try {
        const membership = await Membership.findOne({ _id: id });
        if (membership) {
            membership.classes.push(classid);
            await membership.save();
            return NextResponse.json({  executed : true ,message : "Class added successfully."}, { status: 200 });
        }
        return NextResponse.json({ error: "Membership not found", executed : false }, { status: 404 });
    } catch (error : any) {
        return NextResponse.json({ error: error.message, executed : false }, { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    await connectDB();
    const { id } = params;
    const body = await req.json();
    const classid = body.classid
    try {
        const membership = await Membership.findOne({ _id: id });
        if (membership) {
            membership.classes = membership.classes.filter((id) => id !== classid);
            await membership.save();
            return NextResponse.json({  executed : true ,message : "Class removed successfully."}, { status: 200 });
        }
        return NextResponse.json({ error: "Membership not found", executed : false }, { status: 404 });
    } catch (error : any) {
        return NextResponse.json({ error: error.message, executed : false }, { status: 500 });
    }
}
