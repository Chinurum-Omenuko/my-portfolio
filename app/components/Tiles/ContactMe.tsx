'use client';

import { useEffect, useState } from "react";
import arrow from "../../../public/arrow.svg";
import "./summarystyles.css"

export default function ContactMe() {
    const questions: Array<string> = ["Have some questions?", "Need to send me a quick email?"];
    const [index, setIndex] = useState(0);

    const changeQuestion = () => {
        setIndex(prevIndex => prevIndex === 0 ? 1 : 0)
    }
    
    useEffect(() => {
        let timerId = setInterval(changeQuestion, 5000);

        return () => clearInterval(timerId)
    }, [])

    return (
        <section className="item5 item grid-col-span-2 flex flex-col justify-between cursor-auto group-hover:cursor-grab">
            <div className="questions flex flex-row justify-between">
                <h4>{questions[index]}</h4>
                
                <a href="mailto:chinuomenu@gmail.com">
                    <img src={arrow.src} alt=""
                        className="arrow-animation"
                        style={{ transformOrigin: 'center center' }} />
                </a>
            
            </div>
            <div className="contactme">
                <h2 className="text-left text-4xl font-normal">Contact me</h2>
            </div>
        </section>
    )
}
