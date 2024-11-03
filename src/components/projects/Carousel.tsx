"use client";
import { urlFor } from "@/sanity/lib/image";
import { Loader } from "lucide-react";
import Image from "next/image";
import { FC, Suspense, useState } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel: FC<CarouselProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(urlFor(images[0]));

  return (
    <div className='space-y-2'>
      <div className='h-[25rem]'>
        <Image
          src={currentImage}
          width={500}
          height={500}
          alt='current image'
          className='w-full h-[25rem] shadow'
        />
      </div>
      <div className='grid grid-cols-4 gap-2'>
        {images.map((img, index) => (
          <Suspense key={index} fallback={<Loader />}>
            <div className='w-full max-h-28 overflow-hidden'>
              <Image
                src={urlFor(img)}
                width={1000}
                height={1000}
                alt='image'
                className='opacity-60 hover:opacity-100 hover:scale-110 cursor-pointer transition duration-300'
                onClick={() => setCurrentImage(urlFor(img))}
              />
            </div>
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
