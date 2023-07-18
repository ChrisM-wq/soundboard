import { BiSolidLockAlt } from 'react-icons/bi';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

const Song = () => {

    const iconSize = '2em';

    return (
        <div className='flex gap-2 w-full h-'>
            <div className='flex w-1/2 items-center justify-center'>
                <iframe src="https://open.spotify.com/embed/track/7HfzbYD6EYmDEjI6CpiWnO?utm_source=generator&theme=0" width="600" height="232" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className='flex gap-2 w-1/2'>
                <AiFillStar size={iconSize}/>
                <AiOutlineStar size={iconSize}/>
                <BiSolidLockAlt size={iconSize}/>
                <AiFillStar size={iconSize}/>
                <BiSolidLockAlt size={iconSize}/>
            </div>
        </div>
    )
};

export default Song;