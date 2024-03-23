import React from "react";
import Link from "next/link";

export default function Experience() {
    return <div className="justify-center max-w-xl animate-fade-in-right px-10 py-16">
        <h1 className="font-extrabold text-4xl hover:scale-125 transition-all">
            {"// Experience"}
        </h1>
        <Link href={"https://www.jetbrains.com"}>
            <h1 className="font-extrabold text-xl hover:scale-105 transition-all">
                {"# Campus Ambassador @ JetBrains"}
            </h1>
        </Link>
        <Link href={"http://www.bar-kod.rs"}>
            <h1 className="font-extrabold text-xl hover:scale-105 transition-all">
                {"# Web Developer @ BarKod"}
                <br/>
                {"# Marketing Manager @ BarKod"}
            </h1>
        </Link>
    </div>
}
