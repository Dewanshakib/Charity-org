import connectDb from "@/helper/MongoConfig";
import { registerData } from "@/models/MemberSchema";
import { NextResponse } from "next/server";

export async function POST(req) {
  const {
    name,
    fatherName,
    motherName,
    birthDate,
    number,
    className,
    studying,
  } = await req.json();
  await connectDb();
  await registerData.create({
    name,
    fatherName,
    motherName,
    birthDate,
    number,
    className,
    studying,
  });
  return NextResponse.json(
    {
      message: "Registration Successfull",
    },
    {
      status: 200,
    }
  );
}

export async function GET(req) {
  await connectDb()
  const userData = await registerData.find()
  return NextResponse.json(userData,{status:201})
}