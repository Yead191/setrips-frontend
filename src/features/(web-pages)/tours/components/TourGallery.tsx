'use client';

import { useState } from 'react';
import Image from 'next/image';
import { DetailedTourMedia } from '@/types/tour';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface TourGalleryProps {
  media: DetailedTourMedia;
}

type SelectedMedia = {
  type: 'image' | 'video';
  url: string;
  alt?: string;
};

const TourGallery = ({ media }: TourGalleryProps) => {
  const { gallery, video } = media;
  const [selectedMedia, setSelectedMedia] = useState<SelectedMedia>({
    type: 'image',
    url: gallery[0]?.url || '',
    alt: gallery[0]?.alt || '',
  });

  const mediaList: SelectedMedia[] = [
    ...gallery.map((img) => ({ type: 'image' as const, url: img.url, alt: img.alt })),
    ...(video ? [{ type: 'video' as const, url: video.embed_url, alt: video.title }] : []),
  ];

  const currentIndex = mediaList.findIndex(
    (m) => m.type === selectedMedia.type && m.url === selectedMedia.url
  );

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = currentIndex > 0 ? currentIndex - 1 : mediaList.length - 1;
    if (mediaList[newIndex]) {
      setSelectedMedia(mediaList[newIndex]);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = currentIndex < mediaList.length - 1 ? currentIndex + 1 : 0;
    if (mediaList[newIndex]) {
      setSelectedMedia(mediaList[newIndex]);
    }
  };


  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      {/* Thumbnails Sidebar */}
      <div className="hidden md:flex flex-col gap-4 w-1/4 max-h-[500px] overflow-y-auto hide-scrollbar pr-2">
        {gallery.map((img) => (
          <div
            key={img.id}
            onClick={() => setSelectedMedia({ type: 'image', url: img.url, alt: img.alt })}
            className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${selectedMedia.type === 'image' && selectedMedia.url === img.url
              ? 'border-primary'
              : 'border-transparent hover:border-primary/50'
              }`}
          >
            <Image
              src={img.url}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}

        {/* Video Thumbnail */}
        {video && (
          <div
            onClick={() =>
              setSelectedMedia({
                type: 'video',
                url: video.embed_url,
                alt: video.title,
              })
            }
            className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${selectedMedia.type === 'video' ? 'border-primary' : 'border-transparent hover:border-primary/50'
              }`}
          >
            <Image
              src={video.thumbnail_url}
              alt={video.title}
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover opacity-80 transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white">
                <Play className="w-6 h-6 ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Image / Video View */}
      <div className="w-full md:w-3/4 relative aspect-video md:aspect-auto md:min-h-[500px] rounded-lg overflow-hidden group bg-muted">
        {selectedMedia.type === 'image' ? (
          <>
            <Image
              src={selectedMedia.url}
              alt={selectedMedia.alt || 'Tour image'}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 75vw"
              className="object-cover"
            />
          </>
        ) : (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`${selectedMedia.url}${selectedMedia.url.includes('?') ? '&' : '?'}autoplay=1`}
            title={selectedMedia.alt || 'YouTube video player'}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}

        {/* Navigation Arrows */}
        {mediaList.length > 1 && (
          <>
            <button 
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors opacity-0 group-hover:opacity-100 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors opacity-0 group-hover:opacity-100 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TourGallery;