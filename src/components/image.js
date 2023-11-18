import style from "./image.css";
import hover from "../images/icon-view.svg";
const Image = () => {
    return(
        <div className="nft">
            {/*image*/}
            <div className="hoverEffect">
                <img src={hover}/>
            </div>
        </div>
    )
}

export default Image;