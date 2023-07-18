import { BiSolidLockAlt } from 'react-icons/bi';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

const Song = () => {

    const iconSize = '2em';

    return (
        <>
        <div className='flex gap-2'>
            <AiFillStar size={iconSize}/>
            <AiOutlineStar size={iconSize}/>
            <BiSolidLockAlt size={iconSize}/>
            <AiFillStar size={iconSize}/>
            <BiSolidLockAlt size={iconSize}/>
        </div>
        </>
    )
};

export default Song;