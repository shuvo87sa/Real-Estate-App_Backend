import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Apartment and bachelor room,Get Your Dream Place</h1>
          <p>
          At UrbanHaven, we help you find the ideal apartment or bachelor room with ease. 
          Whether you're a student or a young professional, our platform offers a wide selection of 
          affordable and quality living spaces.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>3+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>15</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>60+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
