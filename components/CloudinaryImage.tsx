'use client';

import { CldImage } from 'next-cloudinary';

interface CloudinaryImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
}

export default function CloudinaryImage({
  src,
  alt,
  width,
  height,
  className = '',
  fill = false,
  priority = false,
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
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  );
}