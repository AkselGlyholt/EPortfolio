const Skeleton = ({ width, height, borderRadius, classN, img }) => {
  return (
    <>
      {img ? (
        <div
          className={`${
            classN
              ? classN + " project__img--skeleton-box skeleton-box"
              : "skeleton-box"
          }`}
          style={{
            width,
            height,
            borderRadius,
          }}
        ></div>
      ) : (
        <div
          className={`${classN ? classN + " skeleton-box" : "skeleton-box"}`}
          style={{
            width,
            height,
            borderRadius,
          }}
        ></div>
      )}
    </>
  );
};

export default Skeleton;
