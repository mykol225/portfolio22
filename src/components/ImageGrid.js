export const ImageGrid = ({ img1, alt1, img2, alt2, img3, alt3}) => {
  return (
    <div className="img_grid_3img">
      <img src={img1} alt={alt1} />
      <img src={img2} alt={alt2} />
      <img src={img3} alt={alt3} />
    </div>
  );
}