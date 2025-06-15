import digital from "../../../../assets/digital.png";
import csc from "../../../../assets/csc.png";
import paytm from "../../../../assets/paytm1.png";
import upi from "../../../../assets/upi.png";
import associated1 from "../../../../assets/associated20.jpg";
import associated2 from "../../../../assets/associated21.jpg";
import "./styles.css";

const Associated = () => {
  return (
    <>
      <div className="associated-with">
        <h3 style={{ textAlign: "center", marginTop: "7rem" }}>
          ASSOCIATED WITH
        </h3>
        <div className="partner-logos">
          {/* Add image sources or imports accordingly */}
          <img src={digital} alt="Paytm" />
          <img src={csc} alt="CSC" />
          <img src={upi} alt="Gromo" />
          <img src={paytm} alt="Digital India" />
          <img src={associated1} alt="GoDaddy" />
          <img src={associated2} alt="Turtlemint" />
        </div>
      </div>
    </>
  );
};

export default Associated;
