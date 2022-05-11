import React, { useRef } from "react";
import Image from "next/image";
import UnderDevGif from "/assets/gifs/under-dev.gif";
import { FaLinkedin, FaGithubSquare, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export function UnderDev () {

    const email = useRef(null);
    const saveEmail = () => {
        const emailValue = email.current.value;
        console.log(emailValue);
    }

    return (
        <div className="h-screen flex flex-col justify-center items-center w-4/6 m-auto">
            <div>
                <h1 className="text-xl">My portfolio website is under development</h1>
                <p className="text-sm text-gray-400">
                    We are currently working on improving the user experience and automating quick actions
                </p>
            </div>
            <Image src={UnderDevGif} alt="Alt Ghost is under development" />
            <div>
                <p className="mt-4">As you wait you can check me here instead</p>
                <div className="flex justify-start mt-2">
                    <Link href="https://www.linkedin.com/in/cedric-murairi/" target="_blank">
                        <a><FaLinkedin size={30} /></a>
                    </Link>
                    <Link href="https://github.com/CedricMurairi" target="_blank">
                        <a><FaGithubSquare size={30} /></a>
                    </Link>
                </div>
                <p className="mt-4">Or leave me a message at{' '}
                    <Link href="mailto:murairicedric@gmail.com">
                        <a className="underline">murairicedric@gmail.com</a>
                    </Link>
                </p>
            </div>
        </div>
    );
}
// export default function UnderDev() {
//     return (
//         <div className="flex flex-col justify-center items-center">
//             <UnderDevModal />
//         </div>
//     );
// }