import Image from 'next/image';

interface ImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export function Img({ src, width, height, alt }: ImageProps) {
  return <Image src={src} alt={alt} width={width} height={height} />;
}
