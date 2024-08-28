import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import encryptDecrypt from "./utils/encrypter";

function middleware(request: NextRequest) {}

export default middleware;

export { auth as middleware } from "@/auth";
