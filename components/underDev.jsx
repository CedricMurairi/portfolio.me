import React, { useRef } from "react";
import Image from "next/image";
import UnderDevGif from "/public/assets/gifs/under-dev.gif";
import MyPicture from "/public/favicon.ico";
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";

export function UnderDev () {
    const description = "Portfolio Website | Cédric Murairi | Progressive Engineering. I share my all my work and adventures from engineering to education, farming and craftsmanship to my everyday activities and future projects";
    const title = "Software Engineering, Web Development, Mobile App Deveopment | Cédric Murairi"

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta property="title" content={title} />
                <meta property="og:title" content={title} />
                <meta name="twitter:title" content={title} />  
                <meta name="description" content={description} />  
                <meta property="og:description" content={description} />   
                <meta name="twitter:description" content={description} />  
                <meta property="image" content="/favicon.png" />  
                <meta property="og:image" content="/favicon.png" /> 
                <meta name="twitter:image"content="/favicon.png" />
                <link rel="icon" href="/favicon.png"></link>
            </Head>
            <div className="h-screen flex flex-col justify-center items-center w-4/6 m-auto">
                <div>
                    <h1 className="text-xl">My website is undergoing a redesign</h1>
                    <p className="text-sm text-gray-400">
                        Working on a new flow and series of automations making the experience better, providing more than just a portfolio.
                    </p>
                </div>
                <Image src={UnderDevGif} alt="Under Development GIF" />
                <div>
                    <p className="mt-4 text-center">As you wait, please check me here instead</p>
                    <div className="flex justify-center mt-2">
                        <a href="https://www.linkedin.com/in/cedric-murairi/" rel="noreferrer" target="_blank">
                            <FaLinkedin size={30} />
                        </a>
                        <a href="https://github.com/CedricMurairi" rel="noreferrer" target="_blank">
                            <FaGithubSquare size={30} />
                        </a>
                        <a href="https://twitter.com/CedricMurairi" rel="noreferrer" target="_blank">
                            <FaTwitterSquare size={30} />
                        </a>
                    </div>
                    <p className="mt-4 text-center">Or leave me a message at{' '}
                        <Link href="mailto:murairicedric@gmail.com">
                            <a className="underline">murairicedric@gmail.com</a>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}