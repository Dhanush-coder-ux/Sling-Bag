import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Title from "../components/Title";

export const MobileAppBar = ({ appbarTitle, withBackArrow, withFavIcon,isFavourite }) => {
  const [isScrolled, setIsScrolled] = useState(false); // ✅ Renamed
  const [isFav,setFavourite]=useState(isFavourite);
  const navigate = useNavigate();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex justify-between items-center w-full py-3 px-2 fixed top-0 z-50
        ${isScrolled ? "backdrop-blur-sm bg-white/30 shadow-md" : "bg-transparent"}`}
    >
      {withBackArrow ? (
        <img
          src={"/icons/arrow.svg"}
          width={30}
          height={30}
          alt="Back"
          className="font-extrabold cursor-pointer"
          onClick={() => navigate(-1)}
        />
      ) : (
        <span></span>
      )}
      
      <span className="font-extrabold text-2xl">{appbarTitle}</span>
      
      {withFavIcon ? (
        <span className="text-2xl cursor-pointer" onClick={()=>setFavourite(!isFav)}>{ isFav ? "❤️" : "🖤"}</span>
      ) : (
        <span></span>
      )}
    </div>
  );
};
