const Square = ({
  width,
  height,
  className,
  targetClick,
  onMouseOver,
  onMouseOut,
  children,
}) => {
  return (
    <div
      className={className}
      onClick={targetClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      style={{ width: width, height: height }}
    >
      {children}
    </div>
  );
};

export default Square;
