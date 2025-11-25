import { redirect } from "next/navigation";
import { checkAuth, logout } from "@/app/actions";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import DashboardClient from "./dashboard-client";

export default async function Dashboard() {
    const isAuthenticated = await checkAuth();

    if (!isAuthenticated) {
        redirect("/admin");
    }

    return (
        <div className="container py-10">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-serif font-bold">Admin Dashboard</h1>
                <form action={logout}>
                    <Button variant="outline">Logout</Button>
                </form>
            </div>

            <DashboardClient products={products} />
        </div>
    );
}
