import React from 'react';
import Navbar from "@/app/(home)/components/Navbar";
import Projects from "@/app/(home)/components/Projects";
import { Socials } from "@/app/(home)/components/Socials";
import Education from "@/app/(home)/components/Education";
import Skills from "@/app/(home)/components/Skills";
import Closing from "@/app/(home)/components/Closing";
import '../globals.css';
import Experience from "@/app/(home)/components/Experience";
import Link from "next/link";

export default function Page() {
    return (
        <html>
        <head>
            <title>ppettarrm</title>
            <style>
                {`
                .background-rain {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                    pointer-events: none;
                    color: cyan;
                }

                .raindrop {
                    position: absolute;
                    opacity: 0.3;
                    animation: fall 5s linear infinite;
                }

                @keyframes fall {
                    0% {
                        transform: translateY(-10%) rotate(0deg);
                    }
                    50% {
                        transform: translateY(300%) rotate(180deg);
                    }
                    100% {
                        transform: translateY(300%) rotate(360deg);
                    }
                }
                `}
            </style>
        </head>
        <body className="bg-black text-white">
        <div className="background-rain">
            {[...Array(25)].map((_, index) => {
                return (
                    <div
                        key={index}
                        className="raindrop"
                        style={{
                            fontSize: `${Math.random() * 20 + 10}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDuration: `${Math.random() * 5 + 3}s`,
                        }}
                    >
                        {`</>`}
                    </div>
                );
            })}
        </div>
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
        <footer className="flex justify-center items-center mb-5">
            <h1>Copyright © 2024 <Link href={"https://www.github.com/ppettarrm"}>ppettarrm</Link></h1>
        </footer>
        </body>
        </html>
    );
}
