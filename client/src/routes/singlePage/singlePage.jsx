import './singlePage.scss';
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import {singlePostData} from "../../lib/dummydata";
import {userData} from "../../lib/dummydata";



function SinglePage(){
    return (
        <div className='singlePage'>
            <div className="details">
               <div className="wrapper">
                  <Slider images={singlePostData.images} />
                  <div className="info">
                    <div className="top">  
                        <div className="post">
                            <h1>{singlePostData.title}</h1>
                            <div className="address">
                                <img src="/pin.png" alt="" />
                                <span>{singlePostData.address}</span>
                            </div>
                          <div className='price'>{singlePostData.price} tk</div>
                        </div>
                        <div className="user">
                            <img src={userData.img} alt="" />
                            <span>{userData.name}</span>
                        </div>
                    </div>
                    <div className="bottom">
                        {singlePostData.description}
                    </div>
                  </div>
                </div>  
            </div>
            <div className="features">
               <div className="wrapper">
                  <p className='title'>Genral</p>
                  <div className="listVertical">
                    <div className="feature">
                        <img src="/utility.png" alt="" />
                        <div className="featureText">
                            <span>Utilities</span>
                            <p>Renter is responsible</p>
                        </div>
                    </div>
                    <div className="feature">
                        <img src="/pet.png" alt="" />
                        <div className="featureText">
                            <span>Pet Policy</span>
                            <p>Pet is allow</p>
                        </div>
                    </div>
                    <div className="feature">
                        <img src="/fee.png" alt="" />
                        <div className="featureText">
                            <span>Property Feees</span>
                            <p>Must have 4x rent to tota household income</p>
                        </div>
                    </div>
                  </div>
                  <p className='title'>Sizes</p>
                  <div className="sizes">
                    <div className="size">
                        <img src="/size.png" alt="" />
                        <span>80 sqft</span>
                    </div>
                    <div className="size">
                        <img src="/bed.png" alt="" />
                        <span>2 beds</span>
                    </div>
                    <div className="size">
                        <img src="/bath.png" alt="" />
                        <span>1 bathroom</span>
                    </div>
                  </div>
                  <p className='title'>Nearby Places</p>
                  <div className="listHorizontal">
                    <div className="feature"> 
                        <img src="/school.png" alt="" />
                        <div className="featureText">
                            <span>School</span>
                            <p>250m away</p>
                        </div>
                    </div>
                    <div className="feature">
                        <img src="/bus.png" alt="" />
                        <div className="featureText">
                            <span>Bus Stop</span>
                            <p>60m away</p>
                        </div>
                    </div>
                    <div className="feature">
                        <img src="/restaurant.png" alt="" />
                        <div className="featureText">
                            <span>Resturent</span>
                            <p>50m away</p>
                        </div>
                    </div>
                  </div>
                  
                  <div className="title">Location</div>
                  <div className="mapContainer">
                    <Map items={[singlePostData]}/>
                  </div>
                  <div className="buttons">
                    <button>
                        <img src="/chat.png" alt="" />
                        Send a Message
                    </button>
                    <button>
                        <img src="/save.png" alt="" />
                        save the place
                    </button>
                  </div>
               </div>  
            </div>
        </div>
    )
}

export default SinglePage