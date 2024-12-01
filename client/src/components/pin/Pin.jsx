import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./pin.scss";

function Pin({ item }) {

  if (!item || !item.latitude || !item.longitude) {
    console.error("Invalid item data:", item); 
    return null; 
  }

  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
          <div className="popupContainer">
             <img src={item.img} alt=""  />
            <div className="textContainer">
               <Link to={`/${item.id}`}>{item.title}</Link>
                {/* <h3>{item.title}</h3> */}
                {/* {item.address} */}
                <h9 style={{ color: 'Orange' }}>{item.address}</h9>
                
                <span >{item.bedroom} bedroom</span>
                <span>{item.bathroom} bathroom</span>
                
                <b style={{color:"MediumBlue"}}>{item.price} tk</b>

            </div>
          </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
