import { NextRequest as req, NextResponse as res } from "next/server";
import connectDB from "@/lib/db";


export async function GET(req: req) {
    const data = await connectDB();
    return res.json({ConnectionStatus: data})
}