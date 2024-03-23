import React from 'react'
import Navbar from "@/app/(home)/components/Navbar";
import Projects from "@/app/(home)/components/Projects";
import {Socials} from "@/app/(home)/components/Socials";
import Education from "@/app/(home)/components/Education";
import Skills from "@/app/(home)/components/Skills";
import Closing from "@/app/(home)/components/Closing";
import '../globals.css';
import Experience from "@/app/(home)/components/Experience";

export default function Page() {
    return (
        <html>
        <head>
            <title>ppettarrm</title>
        </head>
        <body className="bg-black text-white">
        <div className="min-h-screen p-5">
            <div className="fixed top-1/3 p-0 m-0 w-10">
                <Socials />
            </div>
            <div className="inline mx-auto w-90">
                <Navbar />
                <div className="flex justify-center p-5 min-w-[90%] flex-wrap">
                    <div className="column">
                        <Skills/>
                    </div>
                    <div className="column">
                        <Education/>
                    </div>
                    <div className="column">
                        <Experience/>
                    </div>
                    <div className="column">
                        <Projects/>
                    </div>
                </div>
                <div className="flex pt-[5rem] justify-center">
                    <Closing />
                </div>
            </div>
        </div>
        </body>
        </html>
    );
}