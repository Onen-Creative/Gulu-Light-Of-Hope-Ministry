'use client';

import { CldImage } from 'next-cloudinary';

interface CloudinaryImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  fill?: boolean;
}

export default function CloudinaryImage({
  src,
  alt,
  width,
  height,
  className = '',
  fill = false,
}: CloudinaryImageProps) {
  return (
    <CldImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      fill={fill}
      crop="fill"
      gravity="auto"
      quality="auto"
      format="auto"
    />
  );
}