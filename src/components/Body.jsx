import RestaurantCard from "./RestaurantCard";
// import restList from "../utils/mockData";
// import restaurantList from "../utils/mockData1";

const Body = () => {

  let restaurantList = [
    {
    info:{
      id: "2831",
      name: "Lakeview Milk Bar",
      cloudinaryImageId: "juzrypje6zlbu2jgebwm",
      costForTwo: "₹450 for two",
      cuisines: ["Desserts", "Ice Cream", "Bakery"],
      avgRating: 4.0,
      parentId: "581",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
  }
    },
    {
    info:{
        id: "2832",
        name: "Punjabi Lassi",
        cloudinaryImageId: "juzrypje6zlbu2jgebwm",
        costForTwo: "₹450 for two",
        cuisines: ["Desserts", "Ice Cream", "Bakery"],
        avgRating: 4.4,
        parentId: "582",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
    }
    },
    {
    info:{
        id: "2833",
        name: "Sudha Milk Bar",
        cloudinaryImageId: "juzrypje6zlbu2jgebwm",
        costForTwo: "₹450 for two",
        cuisines: ["Desserts", "Ice Cream", "Bakery"],
        avgRating: 4.7,
        parentId: "583",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
    }
    },
    {
    info:{
        id: "2834",
        name: "Carolena Milk Bar",
        cloudinaryImageId: "juzrypje6zlbu2jgebwm",
        costForTwo: "₹450 for two",
        cuisines: ["Desserts", "Ice Cream", "Bakery"],
        avgRating: 3.4,
        parentId: "584",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
    }
    }
    ];
  
  return (
    <div className="body">
      {/* <div className="Search-bar">Search-bar</div> */}

      <div className="filter">
      <button className="filter-btn"
        onClick={ () => {
           restaurantList = restaurantList.filter(
             (res) => res.info.avgRating > 4
           );
          console.log(restaurantList);
        }}
        >
        Top Rating Restaurant
      </button>
      </div>
      <div className="res-Container">
        {/*Using Map Function I am trying to iterate each restaurant.
        2nd thing always use key for better performance during rendering card.*/
        /* Not Using Keys (not acceptable it will give you warning, If you don't have id then u can simply use index as well and if you have id then prefferable to use id only.*/
        }
        {/* {restList.map((restaurant) => (
      <RestaurantCard key = {restaurant.info.id} resData={restaurant} />
        ))} */}
        {restaurantList.map((restaurant) => (
          <RestaurantCard key = {restaurant.info.id} resData={restaurant} />
            ))}
      </div>
    </div>
  );
};
export default Body;