const RestCard = ({ resdata }) => {
  // console.log(resdata);
  return (
    <>
      <div className="restCard">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resdata.imageId
          }
          alt=""
          className="resLogo"
        />
        <h6>Suresh Foods</h6>
        <h4>Biryani, South India, Asian</h4>
        {/* <h5>{resdata.address.street.join(", ")}</h5> */}
        <h3>{resdata.action.text}</h3>
        <p style={{ color: "red" }}>
          Availability: {resdata.accessibility.altTextCta}
        </p>
      </div>
    </>
  );
};

export default RestCard;
