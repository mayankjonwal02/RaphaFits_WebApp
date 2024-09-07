// app/api/classes/route.ts
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Class from '@/app/model/Classes';

export async function POST(req: Request) {
    await connectDB();
    const body = await req.json();
    
    const {
        title,
        subtitle,
        description,
        date,
        time,
        slots,
        trainerName,
        price
    } = body;

    try {
        // Create a new class
        const newClass = new Class({
            title : title,
            subtitle : subtitle,
            description : description,
            date: date,
            time : time,
            slots : slots,
            trainerName : trainerName,
            price : price,
            registered : []
            
        });

        await newClass.save();

        return NextResponse.json({
            message: "Class created successfully.",
            class: newClass,
            executed: true
        }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({
            error: error.message,
            executed: false
        }, { status: 500 });
    }
}



export async function GET(req: Request) {
    await connectDB();
    
    try {
        // Fetch all classes
        const classes = await Class.find();

        return NextResponse.json({
            classes: classes,
            message: "Classes fetched successfully.",
            executed: true
        }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({
            error: error.message,
            executed: false
        }, { status: 500 });
    }
}
