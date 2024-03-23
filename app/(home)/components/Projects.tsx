import React from "react";
import Link from "next/link";

export default function Projects() {
    return <div className="rotate-2 hover:-rotate-2 justify-center max-w-xl animate-fade-in-right p-[5rem]">
        <Link href={"https://www.github.com/ppettarrm"}>
        <h1 className=" font-extrabold text-4xl hover:scale-110 transition-all">
            {"// Projects"}
        </h1>
        </Link>

        <Link href={"https://github.com/ppettarrm/RISProjekatV2"}>
        <h1 className=" font-extrabold text-xl hover:scale-110 transition-all">
            {"# Codegram"}
        </h1>
        </Link>

        <Link href={"https://github.com/ppettarrm/Proxima"}>
            <h1 className=" font-extrabold text-xl hover:scale-110 transition-all">
                {"# Proxima"}
            </h1>
        </Link>

        <Link href={"https://github.com/ppettarrm/inviggo-internship"}>
            <h1 className=" font-extrabold text-xl hover:scale-110 transition-all">
                {"# MarketApp"}
            </h1>
        </Link>

        <Link href={"https://github.com/ppettarrm/PDFWizard"}>
            <h1 className=" font-extrabold text-xl hover:scale-110 transition-all">
                {"# PDFWizard"}
            </h1>
        </Link>
    </div>
}
