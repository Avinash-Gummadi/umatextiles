"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LoginState } from "@/app/types";

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
    const username = formData.get("username");
    const password = formData.get("password");

    // Hardcoded credentials for demonstration
    // In a real app, use environment variables and a database
    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminUsername || !adminPassword) {
        console.error("Admin credentials not set in environment variables");
        return { error: "Internal server error" };
    }

    if (username === adminUsername && password === adminPassword) {
        const cookieStore = await cookies();
        cookieStore.set("admin_session", "true", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24, // 1 day
            path: "/",
        });
        redirect("/admin/dashboard");
    } else {
        return { error: "Invalid credentials" };
    }
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete("admin_session");
    redirect("/admin");
}

export async function checkAuth() {
    const cookieStore = await cookies();
    return cookieStore.has("admin_session");
}
