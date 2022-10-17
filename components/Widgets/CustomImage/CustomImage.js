import NextImage from "next/image";

const CustomImage = ({ className, src, alt = "" }) => {
  return (
    <div className={`relative flex-shrink-0 ${className}`}>
      <NextImage src={src} alt={alt} layout="fill" objectFit="contain" />
    </div>
  );
};

export default CustomImage;
