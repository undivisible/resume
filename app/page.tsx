import React from 'react';
import PlayerComponent from './player'; // Import the client-side component

const Home: React.FC = () => {
    return (
      <div className="flex justify-center items-center h-screen w-screen bg-dgray">
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png?20091205084734" sizes="any" />
        <div className="flex flex-wrap justify-center items-start gap-6">
            <div className="w-[668px] h-[920px] relative">
                <div className="one">
                    <div className="w-[663px] h-[311px] left-[2px] top-[17px] absolute bg-lgray rounded-[20px]"></div>
                    <div className="w-[266px] h-[61px] left-[25px] top-[245px] absolute text-bwhite text-5xl font-normal font-['Space Grotesk']">max carter.</div>
                    <div className="w-[163px] h-[79px] left-[477px] top-[219px] absolute text-right text-bwhite text-base font-normal font-['Space Grotesk']">melbourne, australia.<br/><a href='mailto:o@undivisible.dev' className='hover:underline'>o@undivisible.dev</a><br/><a href='https://undivisible.dev' className='hover:underline'>undivisible.dev</a><br/>0481729894</div>
                </div>
                <div className="two">
                    <div className="w-[663px] h-[194px] left-[3px] top-[346px] absolute bg-lgray rounded-[20px]"></div>
                    <div className="w-[195px] h-[42px] left-[451px] top-[428px] absolute text-bwhite text-4xl font-normal font-['Space Grotesk']">languages.</div>
                    <div className="w-[189px] h-[129px] left-[25px] top-[377px] absolute text-bwhite text-xl font-normal font-['Space Grotesk']">english - fluent<br/>cantonese - native<br/>chinese - hsk 5<br/>russian - b1/b2<br/>indonesian - a1</div>
                </div>
                <div className="three">
                    <div className="w-[663px] h-[344px] left-[2px] top-[560px] absolute bg-lgray rounded-[20px]"></div>
                    <div className="w-[195px] h-[42px] left-[237px] top-[715px] absolute text-center text-bwhite text-4xl font-normal font-['Space Grotesk']">skills</div>
                    <div className="w-[45px] h-[25px] left-[34px] top-[585px] absolute text-bwhite text-xl font-normal font-['Space Grotesk']">html</div>
                    <div className="w-9 h-[25px] left-[122px] top-[656px] absolute text-bwhite text-xl font-normal font-['Space Grotesk']">css</div>
                    <div className="w-24 h-[25px] left-[189px] top-[626px] absolute text-bwhite text-xl font-normal font-['Space Grotesk']">javascript</div>
                    <div className="w-[55px] h-[25px] left-[458px] top-[815px] absolute text-bwhite text-xl font-normal font-['Space Grotesk']">react</div>
                    <div className="w-[55px] h-[25px] left-[216px] top-[580px] absolute text-bwhite text-xl font-normal font-['Space Grotesk']">node</div>
                    <div className="w-12 h-[25px] left-[373px] top-[592px] absolute text-bwhite text-xl font-normal font-['Space Grotesk']">next</div>
                    <div className="w-[79px] h-[25px] left-[553px] top-[667px] absolute text-bwhite text-xl font-normal font-['Space Grotesk']">tailwind</div>
                    <div className="w-[104px] h-[25px] left-[421px] top-[707px] absolute text-bwhite text-xl font-normal font-['Space Grotesk']">typescript</div>
                    <div className="w-[91px] h-[25px] left-[169px] top-[707px] absolute text-bwhite text-xl font-normal font-['Space Grotesk']">premiere</div>
                    <div className="w-[146px] h-[25px] left-[316px] top-[858px] absolute text-bwhite text-xl font-normal font-['Space Grotesk']">davinci resolve</div>
                    <div className="w-[87px] h-[25px] left-[32px] top-[694px] absolute text-bwhite text-xl font-normal font-['Space Grotesk']">terminal</div>
                    <div className="w-[87px] h-[25px] left-[35px] top-[827px] absolute text-bwhite text-xl font-normal font-['Space Grotesk']">universe</div>
                    <div className="w-[107px] h-[25px] left-[203px] top-[795px] absolute text-bwhite text-xl font-normal font-['Space Grotesk']">continuum</div>
                    <div className="w-[77px] h-[25px] left-[381px] top-[763px] absolute text-bwhite text-xl font-normal font-['Space Grotesk']">twixtor</div>
                    <div className="w-[50px] h-6 left-[576px] top-[838px] absolute text-bwhite text-xl font-normal font-['Space Grotesk']">rsmb</div>
                    <div className="w-[87px] h-[25px] left-[53px] top-[746px] absolute text-bwhite text-xl font-normal font-['Space Grotesk']">sapphire</div>
                    <div className="w-[63px] h-[25px] left-[473px] top-[580px] absolute text-bwhite text-xl font-normal font-['Space Grotesk']">flutter</div>
                    <div className="w-[42px] h-[25px] left-[66px] top-[622px] absolute text-bwhite text-xl font-normal font-['Space Grotesk']">dart</div>
                    <div className="w-[73px] h-[25px] left-[567px] top-[610px] absolute text-bwhite text-xl font-normal font-['Space Grotesk']">python</div>
                    <div className="w-[39px] h-[25px] left-[166px] top-[847px] absolute text-bwhite text-xl font-normal font-['Space Grotesk']">c++</div>
                    <div className="w-[53px] h-[25px] left-[577px] top-[745px] absolute text-bwhite text-xl font-normal font-['Space Grotesk']">unity</div>
                    <div className="w-[42px] h-[25px] left-[452px] top-[642px] absolute text-bwhite text-xl font-normal font-['Space Grotesk']">rust</div>
                    <div className="w-7 h-[25px] left-[320px] top-[647px] absolute text-bwhite text-xl font-normal font-['Space Grotesk']">c#</div>
                </div>
            </div>
            <div className="w-[622px] h-[914px] relative four">
                <div className="w-[622px] h-[888px] left-0 top-[13px] absolute bg-lgray rounded-[20px]"></div>
                <div className="w-[195px] h-[42px] left-[16px] top-[154px] absolute text-bwhite text-4xl font-normal font-['Space Grotesk']">experience</div>
                <div className="w-[184px] h-[42px] left-[420px] top-[425px] absolute text-bwhite text-4xl font-normal font-['Space Grotesk']">education</div>
                <div className="w-[195px] h-[42px] left-[16px] top-[712px] absolute text-bwhite text-4xl font-normal font-['Space Grotesk']">training</div>
                <div className="w-[301px] h-[259px] left-[16px] top-[323px] absolute"><span className="text-bwhite text-xl font-bold font-['Space Grotesk']">studied at:<br/></span><span className="text-bwhite text-xl font-normal font-['Space Grotesk']">the kilmore international school - 2018-2022<br/>eltham college - 2022-2023<br/>eltham high school - 2023<br/></span><span className="text-bwhite text-xl font-normal font-['Space Grotesk']"><br/>undertaking vce 1&2 applied computing<br/>undertaking vet information technology at box hill institute</span></div>
                <div className="w-[353px] h-[259px] left-[251px] top-[609px] absolute text-right text-bwhite text-xl font-normal font-['Space Grotesk']">undertook 3 days of work experience at the swiper gully coffee shop, developing hospitality skills, and experience as a barista making coffees.<br/><br/>undertook a 10 hour (total) cybersecurity course, developing penetration testing skills, as well as prevention of threats.</div>
                <div className="w-[345px] h-[285px] left-[259px] top-[33px] absolute text-right"><span className="text-bwhite text-xl font-normal font-['Space Grotesk']">worked 4 days on a production line<br/></span><span className="text-bwhite text-xl font-normal font-['Space Grotesk']">developed teamwork skills<br/></span><span className="text-bwhite text-xl font-normal font-['Space Grotesk']"><br/>worked a week doing video editing<br/></span><span className="text-bwhite text-xl font-normal font-['Space Grotesk']">gained familiarity with premiere<br/>beat syncing, motion, stabilisation, time remapping, effects, colour correction and audio editing<br/></span><span className="text-bwhite text-xl font-normal font-['Space Grotesk']"><br/>worked three days in a coffee shop</span></div>
            </div>
        </div>
        <PlayerComponent />
      </div>
    );
};
  
export default Home;