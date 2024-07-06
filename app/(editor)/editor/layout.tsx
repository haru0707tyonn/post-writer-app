import SiteFooter from "@/components/site-footer";
import { buttonVariants } from "@/components/ui/button";
import MainNav from "@/components/main-nav";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { dashboardConfig } from "@/config/dashboard";
import DashboardNav from "@/components/dashboard-nav";

export default function EditorLayout({ children }: {children: React.ReactNode}) {
    return (
        <div className="container mx-auto grid items-center gap-10 py-8">
            {children}      
        </div>
    );
}