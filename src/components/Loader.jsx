import { RotatingLines } from "react-loader-spinner";
import "../styles/Loader.scss";
function Loader() {
  return (
    <div className="loader">
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
