interface ImageDividerProps {
  src: string;
  alt?: string;
}

const ImageDivider = ({ src, alt = "Divider" }: ImageDividerProps) => {
  return (
    <div
      className="w-full h-[200px] md:h-[280px] bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${src})` }}
      role="img"
      aria-label={alt}
    />
  );
};

export default ImageDivider;
