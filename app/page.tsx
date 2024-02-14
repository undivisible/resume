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
    );
});
  
<<<<<<< Updated upstream
Home.displayName = 'Home';

export default Home;
=======
export default intro;
>>>>>>> Stashed changes
