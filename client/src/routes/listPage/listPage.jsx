import { listData } from "../../lib/dummydata";
import "./listPage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";

function ListPage() {
  const data = listData;

  console.log("ListPage.jsx - Passing data to Map:", data); 

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data && data.length > 0 ? (
            data.map((item) => <Card key={item.id} item={item} />)
          ) : (
            <p>No properties found.</p>
          )}
        </div>
      </div>

      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  );
}

export default ListPage;
