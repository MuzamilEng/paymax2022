import screenSlider from "../component/screenSlider";

function screenSlider() {
  return (
    <>
      <div className="content-inner-2">
        <div className="container">
          <div className="clients-carousel owl-none owl-carousel owl-loaded owl-drag">
            <screenSlider />
          </div>
        </div>
      </div>
    </>
  );
}

export default screenSlider;
