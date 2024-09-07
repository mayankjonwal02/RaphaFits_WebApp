// app/api/memberships/route.ts
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Membership from '@/app/model/Membership';

export async function POST(req: Request) {
    await connectDB();
    const body = await req.json();
    
    const {
        title,
        startdate,
        enddate,
        price,
        registered = [] // Default to an empty array if not provided
    } = body;

    try {
        // Create a new membership with empty classes
        const newMembership = new Membership({
            title,
            startdate,
            enddate,
            price,
            classes: [], // Initialize with an empty array of classes
            registered
        });

        await newMembership.save();

        return NextResponse.json({
            message: "Membership created successfully.",
            membership: newMembership,
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
        // Fetch all memberships
        const memberships = await Membership.find();

        return NextResponse.json({
            memberships: memberships,
            message: "Memberships fetched successfully.",
            executed: true
        }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({
            error: error.message,
            executed: false
        }, { status: 500 });
    }
}