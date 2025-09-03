import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info || {};

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: '#f0f0f0',
        padding: '10px',
        margin: '10px',
        width: '220px',
        borderRadius: '10px',
      }}
    >
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        style={{ width: '100%', borderRadius: '8px' }}
      />

      <div className="res-card-content">
        <h3>{name}</h3>
        <hr />
        <em>{cuisines?.join(', ')}</em>
        <h4>{avgRating} ⭐</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime} mins</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
