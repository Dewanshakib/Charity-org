import Data from "@/database/Data.json"
import { NextResponse } from "next/server"

export async function GET () {
    const memeberData = Data
    return NextResponse.json(memeberData, { status: 200 })
}