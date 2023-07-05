import { FaStar } from "react-icons/fa";
import { BiCopy } from "react-icons/bi"
const Recent = () => {

    const trackID = '75HBVc7kJLjC2LlPc4ScfH';


    return (
        <div className="bg-black text-white flex justify-around h-96 items-center">
            <div className="flex flex-col gap-4">
                <h3 className=" text-2xl font-semibold">Recently Rated</h3>
                <p>Chris McHardy - great song!</p>
                <div className="flex">
                    <FaStar color="#6285A5" size={"32px"}/>
                    <FaStar color="#6285A5" size={"32px"}/>
                    <FaStar color="#6285A5" size={"32px"}/>
                    <FaStar color="#6285A5" size={"32px"}/>
                    <FaStar color="#6285A5" size={"32px"}/>
                    
                </div>

                <div className="flex gap-4">
                <button className="default-button">View</button>
                <a className="primary-button" href={`https://open.spotify.com/track/${trackID}?go=1&sp_cid=12bb2f60d175a2ba9e47e04206799108&utm_source=embed_player_p&utm_medium=desktop&nd=1`}>Copy link <BiCopy /></a>
                </div>
                

            </div>


            <div>
                <iframe src="https://open.spotify.com/embed/track/6CNKcu9SBPWKMkBvMkPRBT?utm_source=generator&theme=0" width="600" height="232" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            
        </div>
    )
};

export default Recent;