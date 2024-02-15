"use client";
import React from 'react';
<<<<<<< Updated upstream
import DetectionComponent from './detection';
import PlayerComponent from './player'; // Import the client-side component

const Home= React.memo(() => {
=======
import { BrowserRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
import animations from './motion';
import Redir from './redir';

const intro: React.FC = () => {
>>>>>>> Stashed changes
    return (
<<<<<<< Updated upstream
    <div className="w-[1280px] h-[720px] p-[30px] dgray justify-start items-start inline-flex">
        <BrowserRouter>
          <Redir />
        </BrowserRouter>
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png?20091205084734" sizes="any" />
        <div className="w-[1220px] h-[660px] relative">
            <div className="w-[333px] h-[198px] left-[887px] top-[462px] absolute lgray rounded-[15px] _36_73_interests" />
            <div className="w-[333px] h-[197px] left-[887px] top-[247px] absolute lgray rounded-[15px] _36_75_education" />
            <div className="w-[333px] h-[227px] left-[887px] absolute lgray rounded-[15px] _36_77_experience" />
            <div className="w-[302px] h-[660px] left-[566px] absolute lgray rounded-[15px] _36_79_skills" />
            <div className="w-[547px] h-[413px] top-[247px] absolute lgray rounded-[15px] _36_81_about" />
            <div className="w-[547px] h-[227px] absolute lgray rounded-[15px] _36_85_max" />
        </div>
<<<<<<< Updated upstream
        <DetectionComponent />
        <PlayerComponent />
=======
        <motion.div id="_36_73_interests" animate={animations._36_73_interests} />
        <motion.div id="_36_75_education" animate={animations._36_75_education} />
        <motion.div id="_36_77_experience" animate={animations._36_77_experience} />
        <motion.div id="_36_79_skills" animate={animations._36_79_skills} />
        <motion.div id="_36_81_about" animate={animations._36_81_about} />
        <motion.div id="_36_85_max" animate={animations._36_85_max} />
>>>>>>> Stashed changes
      </div>
=======
        <div className="w-[1280px] h-[720px] relative bg-zinc-900">
        <div className="w-[1280px] h-[720px] p-[30px] left-0 top-0 absolute bg-zinc-900 justify-start items-start inline-flex">
            <div className="w-[1220px] h-[660px] relative">
                <div className="w-[333px] h-52 pl-[211px] pr-[15px] pt-[162px] pb-4 left-[887px] top-[452px] absolute bg-zinc-800 bg-opacity-50 rounded-[15px] justify-end items-center inline-flex">
                    <div className="w-[107px] h-[30px] text-white text-2xl font-normal font-['Space Grotesk']">interests</div>
                </div>
                <div className="h-[207px] pl-[199px] pr-[15px] pt-[162px] pb-[15px] left-[887px] top-[227px] absolute bg-zinc-800 bg-opacity-50 rounded-[15px] justify-end items-center inline-flex">
                    <div className="w-[119px] h-[30px] text-white text-2xl font-normal font-['Space Grotesk']">education<br/></div>
                </div>
                <div className="h-[207px] pl-[188px] pr-[15px] pt-[162px] pb-[15px] left-[887px] top-0 absolute bg-zinc-800 bg-opacity-50 rounded-[15px] justify-end items-center inline-flex">
                    <div className="w-[130px] h-[30px] text-white text-2xl font-normal font-['Space Grotesk']">experience</div>
                </div>
                <div className="w-[302px] h-[660px] pl-[229px] pr-[15px] pt-[615px] pb-[15px] left-[566px] top-0 absolute bg-zinc-800 bg-opacity-50 rounded-[15px] flex-col justify-end items-center inline-flex">
                    <div className="w-[58px] h-[30px] text-white text-2xl font-normal font-['Space Grotesk']">skills</div>
                </div>
                <div className="w-[547px] h-[413px] left-0 top-[247px] absolute bg-zinc-800 bg-opacity-50 rounded-[15px]">
                    <div className="w-[111px] h-[30px] left-[421px] top-[368px] absolute text-white text-2xl font-normal font-['Space Grotesk']">about me</div>
                    <div className="w-[126px] h-8 left-[15px] top-[15px] absolute text-white text-[25px] font-normal font-['Space Grotesk']">hi i’m max!</div>
                    <div className="w-[517px] h-[321px] left-[15px] top-[47px] absolute text-white text-[15px] font-normal font-['Space Grotesk']">Also known as Mack, Maxim or Maximus, I am half chinese and half white. I speak cantonese, mandarin, conversational russian and am learning indonesian. Growing up around computers, I started off by learning how to use the terminal, and then moved onto learning languages. I first started off creating websites with HTML, CSS and Javascript, which is mostly what I do nowadays, however, I learned new things like Electron, React, Next.js (Typescript and Tailwind) and Flutter, which leveled up my websites to have nice animation, with Anime.js and the ability to create webapps for android and iOS. Alongside these, I also learned other languages like C# from Unity creating games, and am now learning Rust to create the second generation of my Discord bot. Obviously, with this, I developed a passion for hardware, putting together computers and learning new things, throughout my life, I jumped to upgrading my own hardware, and creating new hardware like servers and PCs for myself.</div>
                </div>
                <div className="h-[227px] pl-5 pr-3.5 pt-[159px] pb-6 left-0 top-0 absolute bg-zinc-800 bg-opacity-50 rounded-[15px] justify-end items-start gap-[113px] inline-flex">
                    <div className="w-[200px] h-11 text-white text-4xl font-normal font-['Space Grotesk']">max carter</div>
                    <div className="w-[200px] h-11 text-right text-white text-xs font-normal font-['Space Grotesk']">melbourne, australia<br/>o@undivisible.dev<br/>undivisible.dev<br/></div>
                </div>
            </div>
        </div>
        <div className="w-[1220px] h-[660px] left-[30px] top-[28px] absolute rounded-[15px]">
            <div className="w-[1220px] h-[660px] left-0 top-0 absolute bg-neutral-800" />
            <div className="w-[141px] h-3.5 left-[1070px] top-[7px] absolute text-gray-200 text-xs font-normal font-['Space Grotesk']">click anywhere to close.</div>
            <div className="w-[228px] left-[366px] top-[204px] absolute text-right text-gray-200 text-xl font-normal font-['Space Grotesk']">I have many interests.</div>
            <div className="w-[158px] h-[45px] left-[30px] top-[584px] absolute text-center text-gray-200 text-4xl font-bold font-['Space Grotesk']">interests</div>
            <div className="w-[365px] h-[77px] left-[229px] top-[245px] absolute text-right text-gray-200 text-xl font-normal font-['Space Grotesk']">Currently, I am learning Russian and Indonesian, at levels B1-B2 and A1-A2 respectively.</div>
            <div className="w-[370px] left-[229px] top-[337px] absolute text-right text-gray-200 text-xl font-normal font-['Space Grotesk']">I learn Mandarin at VSL at a HSK5 level.</div>
            <div className="w-[370px] left-[229px] top-[378px] absolute text-right text-gray-200 text-xl font-normal font-['Space Grotesk']">Outside of these, I also play video games such as Osu, Overwatch,  Minecraft and CS2 with friends.</div>
            <div className="w-[242px] left-[619px] top-[204px] absolute text-gray-200 text-xl font-normal font-['Space Grotesk']">I also did video editing.</div>
            <div className="w-[365px] h-[77px] left-[619px] top-[245px] absolute text-gray-200 text-xl font-normal font-['Space Grotesk']">I enjoy socialising with people internationally online, establishing multicultural relationships.</div>
            <div className="w-[401px] left-[621px] top-[337px] absolute text-gray-200 text-xl font-normal font-['Space Grotesk']">I used to trade and mine cryptocurrency.</div>
            <div className="w-[370px] left-[619px] top-[378px] absolute text-gray-200 text-xl font-normal font-['Space Grotesk']">I go to the gym 4 days a week and used to play tennis and swim semi-competitively.</div>
        </div>
        <div className="w-[1220px] h-[660px] left-[30px] top-[28px] absolute rounded-[15px]">
            <div className="w-[1220px] h-[660px] left-0 top-0 absolute bg-neutral-800" />
            <div className="w-[141px] h-3.5 left-[1070px] top-[7px] absolute text-gray-200 text-xs font-normal font-['Space Grotesk']">click anywhere to close.</div>
            <div className="w-[228px] left-[264px] top-[244px] absolute text-gray-200 text-xl font-normal font-['Space Grotesk']">I am currently in Year 9.</div>
            <div className="w-[180px] h-[45px] left-[30px] top-[584px] absolute text-center text-gray-200 text-4xl font-bold font-['Space Grotesk']">education</div>
            <div className="w-[365px] h-[51px] left-[378px] top-[291px] absolute text-gray-200 text-xl font-normal font-['Space Grotesk']">I am currently undertaking VCE 1&2 in Applied Computing.</div>
            <div className="w-[406px] left-[551px] top-[365px] absolute text-gray-200 text-xl font-normal font-['Space Grotesk']">I am also in Box Hill Institute for Cerficate IV for Information Technology.</div>
        </div>
        <div className="w-[1220px] h-[660px] left-[30px] top-[28px] absolute rounded-[15px]">
            <div className="w-[1220px] h-[660px] left-0 top-0 absolute bg-neutral-800" />
            <div className="w-[141px] h-3.5 left-[1070px] top-[7px] absolute text-gray-200 text-xs font-normal font-['Space Grotesk']">click anywhere to close.</div>
            <div className="w-[406px] left-[191px] top-[169px] absolute"><span className="text-gray-200 text-xl font-normal font-['Space Grotesk']">Worked 5 days doing video editing for T-One Image, a video and photo service for marriages.<br/></span><span className="text-gray-200 text-xl font-normal font-['Space Grotesk']">Built familiarity with different editing classNames, as well as the software required to do so.</span></div>
            <div className="w-[195px] h-[45px] left-[30px] top-[584px] absolute text-center text-gray-200 text-4xl font-bold font-['Space Grotesk']">experience</div>
            <div className="w-[406px] h-[146px] left-[623px] top-[345px] absolute"><span className="text-gray-200 text-xl font-normal font-['Space Grotesk']">Worked 3 days in a coffee shop.<br/></span><span className="text-gray-200 text-xl font-normal font-['Space Grotesk']">Learned how to make coffees.<br/>Waited tables, and build customer relations skills.<br/>Learned food safety.</span></div>
            <div className="w-[406px] h-[196px] left-[623px] top-[169px] absolute"><span className="text-gray-200 text-xl font-normal font-['Space Grotesk']">Worked 2 days in a cake factory.<br/></span><span className="text-gray-200 text-xl font-normal font-['Space Grotesk']">Learned the steps required to make cakes.<br/>Learned how to operate the machinery required.<br/>Also built teamwork skills.</span></div>
            <div className="w-[406px] left-[205px] top-[345px] absolute"><span className="text-gray-200 text-xl font-normal font-['Space Grotesk']">Worked 4 days on a production line for aftermarket automotive products.<br/></span><span className="text-gray-200 text-xl font-normal font-['Space Grotesk']">Did jobs such as reflashing chips and unpacking as well as repacking.<br/>This helped build teamwork skills.</span></div>
        </div>
        <div className="w-[1220px] h-[660px] left-[30px] top-[28px] absolute rounded-[15px]">
            <div className="w-[1220px] h-[660px] left-0 top-0 absolute bg-neutral-800" />
            <div className="w-[141px] h-3.5 left-[1070px] top-[7px] absolute text-gray-200 text-xs font-normal font-['Space Grotesk']">click anywhere to close.</div>
            <div className="w-[237px] h-[49px] left-[346px] top-[69px] absolute text-center text-gray-200 text-xl font-normal font-['Space Grotesk']">HTML, CSS and Javascript to create websites.</div>
            <div className="w-[245px] h-[132px] left-[78px] top-[168px] absolute text-center text-gray-200 text-xl font-normal font-['Space Grotesk']">Node.js, Next.js, Electron, React, Tailwind CSS and Typescript for creating cross-platform programs.</div>
            <div className="w-[89px] h-[45px] left-[565px] top-[308px] absolute text-center text-gray-200 text-4xl font-bold font-['Space Grotesk']">skills</div>
            <div className="w-[279px] h-[81px] left-[480px] top-[502px] absolute text-center text-gray-200 text-xl font-normal font-['Space Grotesk']">Obviously, with all of this I should know how to use the terminal.</div>
            <div className="w-[305px] h-[129px] left-[851px] top-[188px] absolute text-center text-gray-200 text-xl font-normal font-['Space Grotesk']">Python and Discord.py from learning Python in school,  using it in in ethical hacking CTFs and creating discord bots with it.</div>
            <div className="w-[184px] left-[667px] top-[50px] absolute text-center text-gray-200 text-xl font-normal font-['Space Grotesk']">Rust and Serenity from creating discord bots.</div>
            <div className="w-[290px] left-[114px] top-[392px] absolute text-center text-gray-200 text-xl font-normal font-['Space Grotesk']">Premiere, Davinci Resolve, Continuum, Universe, Sapphire, RSMB and Twixtor, from doing video editing for school, leisure and work.</div>
            <div className="w-[195px] h-[55px] left-[835px] top-[414px] absolute text-center text-gray-200 text-xl font-normal font-['Space Grotesk']">C# from using Unity to create games.</div>
        </div>
        <div className="w-[1280px] h-[720px] p-[30px] left-0 top-0 absolute bg-zinc-900 justify-start items-start inline-flex">
            <div className="w-[1220px] h-[660px] relative">
                <div className="w-[333px] h-[198px] left-[887px] top-[462px] absolute bg-zinc-800 bg-opacity-50 rounded-[15px]" />
                <div className="w-[333px] h-[197px] left-[887px] top-[247px] absolute bg-zinc-800 bg-opacity-50 rounded-[15px]" />
                <div className="w-[333px] h-[227px] left-[887px] top-0 absolute bg-zinc-800 bg-opacity-50 rounded-[15px]" />
                <div className="w-[302px] h-[413px] left-[566px] top-[247px] absolute bg-zinc-800 bg-opacity-50 rounded-[15px]" />
                <div className="w-[547px] h-[227px] left-0 top-0 absolute bg-zinc-800 bg-opacity-50 rounded-[15px]" />
                <div className="w-[302px] h-[227px] left-[566px] top-0 absolute bg-zinc-800 bg-opacity-50 rounded-[15px]" />
            </div>
        </div>
    </div>
>>>>>>> Stashed changes
    );
});
  
<<<<<<< Updated upstream
Home.displayName = 'Home';

export default Home;
=======
export default intro;
>>>>>>> Stashed changes
