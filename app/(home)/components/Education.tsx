import React from "react";
import Link from "next/link";

export default function Education() {
    return <div className="justify-center max-w-xl animate-fade-in-right px-10 py-16">
        <h1 className="font-extrabold text-4xl hover:scale-125 transition-all">
            {"// Education"}
        </h1>
        <Link href={"https://www.pmf.uns.ac.rs"}>
        <h1 className="font-extrabold text-xl hover:scale-105 transition-all">
            {"# BSc IT @ Faculty of Sciences"}
        </h1>
        </Link>
        <Link href={"http://www.etspupin.edu.rs"}>
        <h1 className="font-extrabold text-xl hover:scale-105 transition-all">
            {"# CS class @ Electrical High School"}
            <br/>
            {" 'Mihajlo Pupin'"}
        </h1>
        </Link>
    </div>
}
