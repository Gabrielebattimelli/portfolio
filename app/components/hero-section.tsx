"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"
import { BackgroundGradientAnimation } from './background';


export default function HeroSection() {
    return (
        <BackgroundGradientAnimation>
        <section className="relative min-h-screen flex flex-col justify-end items-center overflow-hidden">
                {/* Optional gradient - commented out to reveal ripple background */}
                {/** <motion.div
                    className="absolute inset-0 bg-gradient-radial from-blue-100/30 via-blue-50/20 to-white z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                /> */}

                {/* Full screen Ripple background (above image, behind content) */}
                {/* <Background className="absolute inset-0 w-full h-full z-20" mainCircleOpacity={0.18} /> */}

                {/* Full screen image */}
                <motion.div
                    className="absolute inset-0 w-full h-full z-10"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <Image
                        src="/gabriele.png"
                        alt="Gabriele Battimelli"
                        fill
                        className="object-cover sm:object-contain object-top sm:object-bottom"
                        priority
                    />
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
                </motion.div>

                {/* Bottom-attached overlay */}
                <div className="absolute bottom-0 left-0 w-full flex flex-col items-center space-y-6 px-4 z-30 pb-12">
                    {/* Name Overlay */}
                    <motion.div
                        className="relative z-40"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                    >
                        <div className="bg-[rgba(18,113,255,0.1)] backdrop-blur-lg rounded-2xl px-8 py-5 shadow-lg border border-white/10">
                            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
                                Gabriele Battimelli
                            </h1>
                            <motion.p
                                className="text-md text-white/80 text-center mt-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.8 }}
                            >
                                Startup founder. Activist. <br/> Aspiring Software Engineer. Enthusiast and curious.
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Social Media Icons */}
                    <motion.div
                        className="flex space-x-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.1 }}
                    >
                        <Link href="https://www.instagram.com/battimelli.gabriele/" passHref>
                            <motion.div whileHover={{ scale: 1.1 }} className="bg-white/10 p-3 rounded-full backdrop-blur-sm">
                                <Instagram className="text-white" />
                            </motion.div>
                        </Link>
                        <Link href="https://www.linkedin.com/in/gabriele-battimelli-353441255/" passHref>
                            <motion.div whileHover={{ scale: 1.1 }} className="bg-white/10 p-3 rounded-full backdrop-blur-sm">
                                <Linkedin className="text-white" />
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </BackgroundGradientAnimation>
    )
}
