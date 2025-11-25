"use client";

import { useActionState } from "react";
import { login } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const initialState = {
    error: "",
};

export default function AdminLogin() {
    // @ts-ignore - useActionState types can be tricky with server actions returning different shapes
    const [state, formAction, isPending] = useActionState(login, initialState);

    return (
        <div className="flex min-h-screen items-center justify-center bg-muted/40 px-4">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl font-serif">Admin Login</CardTitle>
                    <CardDescription>
                        Enter your credentials to access the dashboard.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={formAction} className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                id="username"
                                name="username"
                                type="text"
                                placeholder="admin"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                required
                            />
                        </div>
                        {state?.error && (
                            <p className="text-sm text-red-500">{state.error}</p>
                        )}
                        <Button type="submit" className="w-full" disabled={isPending}>
                            {isPending ? "Signing in..." : "Sign in"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
