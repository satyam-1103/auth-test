// app/api/auth/signup/route.js

import bcrypt from "bcryptjs";
import connectToDatabase from "@/lib/mongoose";
import User from "@/models/User";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

    await connectToDatabase();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response("User already exists", { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return new Response("User created successfully", { status: 201 });
  } catch (error) {
    return new Response("Error creating user", { status: 500 });
  }
}
