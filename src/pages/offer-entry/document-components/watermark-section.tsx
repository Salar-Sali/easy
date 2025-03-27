import { Image } from "@react-pdf/renderer";

const WatermarkSection = () => {
  return (
    <Image
      src={"/logo.png"}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        marginTop: "-200px",
        marginLeft: "-250px",
        opacity: 0.12,
        zIndex: -1,
        width: "500px",
        height: "400px",
        objectFit: "contain",
      }}
    />
  );
};

export default WatermarkSection;
