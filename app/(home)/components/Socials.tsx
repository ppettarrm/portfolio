import Link from "next/link";
import React from "react";
import {SiGithub, SiGmail, SiInstagram, SiLinkedin} from "react-icons/si";

export function Socials() {

    const socials = [
        {
            link: "https://www.linkedin.com/in/petar-maletin",
            label: "Linkedin",
            Icon: SiLinkedin
        },
        {
            link: "https://www.github.com/ppettarrm",
            label: "Github",
            Icon: SiGithub
        },
        {
            link: "https://www.instagram.com/ppettarr",
            label: "Instagram",
            Icon: SiInstagram
        },
        {
            link: "mailto:ppettarrm@gmail.com",
            label: "Mail",
            Icon: SiGmail
        }
    ]

    return <div className="flex">
        <div>
            <h1 className="rotate-90 mb-[3.5rem] text-3xl">{"</>"}</h1>
            {socials.map(
                (social, index) => {
                    const Icon = social.Icon
                    return <Link href={social.link} key={index} aria-label={social.label}>
                        <Icon className="w-5 h-5 m-4 hover:scale-125 transition-all"/>
                    </Link>
                }
            )}
            <h1 className="rotate-90 mt-[3.5rem] text-3xl">{"</>"}</h1>
        </div>
    </div>
}