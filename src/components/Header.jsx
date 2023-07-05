const Header = () => {
    return (
        <>
            <nav className="w-full bg-[#6285A5] h-16 flex justify-between px-8 items-center">
                {/* Logo & Name */}
                {/* Normal Links */}
                <div className="flex items-center gap-4">
                    <h3>Soundboard</h3>
                       {/* Songs - filter genre, sort ratings */}
                    <h3>Songs</h3>
                        {/* Be able to rate a song and upload the rating */}
                    <h3>Rating</h3>
                </div>
                
                {/* Account Links */}
                <div>
                    Account component
                </div>
                
             
            </nav>
        </>
    )
};

export default Header;