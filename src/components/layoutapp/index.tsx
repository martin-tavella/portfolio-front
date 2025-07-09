"use client"

import { usePathname } from "next/navigation";
import { Navbar } from "../navbar";

export const ClientLayoutApp = ({children}: {children: React.ReactNode}) => {

    const pathname = usePathname();

    const noLayoutPaths = ["/"];

    const shouldShowLayout = !noLayoutPaths.includes(pathname);

    return (
        <>
        {shouldShowLayout && <Navbar />}
        {children}
        </>
    )
};