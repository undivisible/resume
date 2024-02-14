import React from 'react';
import PlayerComponent from './player'; 

const Home: React.FC = () => {
    return (
        <div className="w-[1280px] h-[720px] p-[30px] bg-zinc-900 justify-start items-start inline-flex">
            <div className="w-[1220px] h-[660px] relative">
                <div className="w-[333px] h-52 pl-[211px] pr-[15px] pt-[162px] pb-4 left-[887px] top-[452px] absolute bg-zinc-800 bg-opacity-50 rounded-[15px] justify-end items-center inline-flex four">
                    <div className="w-[107px] h-[30px] text-white text-2xl font-normal font-['Space Grotesk']">interests</div>
                </div>
                <div className="h-[207px] pl-[199px] pr-[15px] pt-[162px] pb-[15px] left-[887px] top-[227px] absolute bg-zinc-800 bg-opacity-50 rounded-[15px] justify-end items-center inline-flex four">
                    <div className="w-[119px] h-[30px] text-white text-2xl font-normal font-['Space Grotesk']">education<br/></div>
                </div>
                <div className="h-[207px] pl-[188px] pr-[15px] pt-[162px] pb-[15px] left-[887px] top-0 absolute bg-zinc-800 bg-opacity-50 rounded-[15px] justify-end items-center inline-flex four">
                    <div className="w-[130px] h-[30px] text-white text-2xl font-normal font-['Space Grotesk']">experience</div>
                </div>
                <div className="w-[302px] h-[660px] pl-[229px] pr-[15px] pt-[615px] pb-[15px] left-[566px] top-0 absolute bg-zinc-800 bg-opacity-50 rounded-[15px] flex-col justify-end items-center inline-flex three">
                    <div className="w-[58px] h-[30px] text-white text-2xl font-normal font-['Space Grotesk']">skills</div>
                </div>
                <div className="w-[547px] h-[413px] left-0 top-[247px] absolute bg-zinc-800 bg-opacity-50 rounded-[15px] two">
                    <div className="w-[111px] h-[30px] left-[421px] top-[368px] absolute text-white text-2xl font-normal font-['Space Grotesk']">about me</div>
                    <div className="w-[126px] h-8 left-[15px] top-[15px] absolute text-white text-[25px] font-normal font-['Space Grotesk']">hi i’m max!</div>
                    <div className="w-[517px] h-[321px] left-[15px] top-[47px] absolute text-white text-[15px] font-normal font-['Space Grotesk']">Also known as Mack, Maxim or Maximus, I am half chinese and half white. I speak cantonese, mandarin, conversational russian and am learning indonesian. Growing up around computers, I started off by learning how to use the terminal, and then moved onto learning languages. I first started off creating websites with HTML, CSS and Javascript, which is mostly what I do nowadays, however, I learned new things like Electron, React, Next.js (Typescript and Tailwind) and Flutter, which leveled up my websites to have nice animation, with Anime.js and the ability to create webapps for android and iOS. Alongside these, I also learned other languages like C# from Unity creating games, and am now learning Rust to create the second generation of my Discord bot. Obviously, with this, I developed a passion for hardware, putting together computers and learning new things, throughout my life, I jumped to upgrading my own hardware, and creating new hardware like servers and PCs for myself.</div>
                </div>
                <div className="h-[227px] pl-5 pr-3.5 pt-[159px] pb-6 left-0 top-0 absolute bg-zinc-800 bg-opacity-50 rounded-[15px] justify-end items-start gap-[113px] inline-flex one">
                    <div className="w-[200px] h-11 text-white text-4xl font-normal font-['Space Grotesk']">max carter</div>
                    <div className="w-[200px] h-11 text-right text-white text-xs font-normal font-['Space Grotesk']">melbourne, australia<br/>o@undivisible.dev<br/>undivisible.dev<br/></div>
                </div>
            </div>
            <PlayerComponent />
        </div>
    );
};
  
export default Home;