"use client"
import { Loader } from 'lucide-react';
import Image from 'next/image';
import { FC, Suspense, useState } from 'react';

interface CarouselProps {
  images: string[];
}

const Carousel: FC<CarouselProps> = ({images}) => {

  const [currentImage, setCurrentImage] = useState<string>(images[0]);

  return <div className='space-y-2'>
    <div className='h-[25rem]'>
      <Image src={currentImage} width={320} height={320} alt='current image' className='w-full h-[25rem] shadow object-cover' />
    </div>
    <div className="grid grid-cols-4 gap-2">
      {images.map((img, index) => (
        <Suspense key={index} fallback={<Loader />}>
          <div className="w-full max-h-28 overflow-hidden">
            <Image 
              src={img} 
              width={120} 
              height={120} 
              alt='image' 
              className='opacity-60 hover:opacity-100 hover:scale-110 cursor-pointer transition duration-300'
              onClick={() => setCurrentImage(img)}
            />
          </div>
        </Suspense>
      ))}
    </div>
  </div>
}

export default Carousel