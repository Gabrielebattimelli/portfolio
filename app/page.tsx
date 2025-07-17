"use client";

import Image from "next/image";
import HeroSection from './components/hero-section';
import { motion } from "framer-motion"
import GlassIcons from "@/app/components/socials";
import {FaInstagram, FaLinkedin, FaYoutube} from "react-icons/fa";
import { Timeline } from "@/app/components/timeline";
import CustomVideoPlayer from "@/app/components/CustomVideoPlayer";
import Carousel from "@/app/components/carousel";

const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.5 + i * 0.2,
            ease: [0.25, 0.4, 0.25, 1],
        }
    })
};

const items = [
    {
        icon: <FaInstagram color="white" size={24} />,
        color: 'orange',
        label: 'Instagram'
    },
    {
        icon: <FaLinkedin color="white" size={24} />,
        color: 'blue',
        label: 'LinkedIn'
    },
    {
        icon: <FaYoutube color="white" size={24} />,
        color: 'red',
        label: 'Youtube'
    },
];

export default function Home() {
    const data = [
        {
            title: "Youth Advocacy",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-white md:text-sm">
                        I am an advocate for progress, technology, and innovation, representing Italian youth in Europe. <br/> <br/> My mission is to amplify young voices. <br/> <br/> I've been reppresenting italian youth thanks to the Italian Ministy of Education and this has allowed me to involve in discussion with polititians, reppresentatives of online pratforms and academia.                   </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/1.png"
                            alt="Better Internet for Kids event in Brussels"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <Image
                            src="/2.png"
                            alt="Generazioni Connesse youth panel"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <Image
                            src="/3.png"
                            alt="Public speaking at an advocacy event"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <Image
                            src="/4.png"
                            alt="Meeting with the youth council"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Software & Startups",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-white md:text-sm">
                        I created the app "Adelante for students," which quickly
                        became a top download in Italy, helping high schoolers
                        share study materials. <br/> Now building startups with my Co-Founder Niall. We just launched our AI powered social media manager called Spreadit.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/5.png"
                            alt="Flutter and Firebase app development"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
                        />
                        <Image
                            src="/6.png"
                            alt="SpreadIt startup project"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
                        />
                        {/* FIX: Add the required props here */}
                        <CustomVideoPlayer
                            src="https://video.gabrielebattimelli.com/adelante.mp4"
                            poster="/5.png"
                            name="Adelante for Students App Demo"
                            description="A video demonstrating the Adelante app for students."
                            uploadDate="2025-07-10T08:00:00+00:00"
                        />
                        {/* FIX: Add the required props here */}
                        <CustomVideoPlayer
                            src="https://video.gabrielebattimelli.com/spreadit.mp4"
                            poster="/6.png"
                            name="SpreadIt AI Social Media Manager"
                            description="A video introducing the SpreadIt startup project."
                            uploadDate="2025-07-15T08:00:00+00:00"
                        />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="relative w-full min-h-screen">
            {/* Hero section with integrated glass icons - LOWER z-index */}
            <HeroSection />
            {/* Timeline section */}
            <div className="relative w-full overflow-clip">
                <Timeline data={data} />
            </div>
            <main className="h-screen w-screen overflow-hidden">
                <Carousel />
            </main>
        </div>
    );
}
