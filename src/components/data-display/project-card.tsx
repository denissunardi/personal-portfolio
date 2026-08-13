'use client';
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/primitives/badge";
import { BrowserFrame } from "@/components/primitives/browser-frame";
import { Button } from "@/components/primitives/button";
import { Card } from "@/components/primitives/card";
import { Icon } from "@/components/primitives/icon";
import { Link } from "@/components/primitives/link";
import { Text } from "@/components/primitives/text";
import type { Project } from "@/content/types";
import * as tokens from "@/design/tokens";
import { cn } from "@/lib/cn";

type ProjectCardProps = {
  project: Project;
  sizes: string;
  className?: string;
};

// Helper function to safely extract all image sources
const getAllImageSources = (project: Project): StaticImageData[] => {
  const mainImage = project.screenshot?.src;
  const extraImages = project.screenshots || [];
  
  // Combine and filter out undefined values
  const allImages = [mainImage, ...extraImages].filter((img): img is StaticImageData => img !== undefined);
  
  console.log("getAllImageSources:", allImages.length, "images found");
  return allImages;
};

const ModalCarousel = ({ images, onClose }: { readonly images: StaticImageData[]; readonly onClose: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  const nextImage = () => setCurrentIndex((i) => (i + 1) % images.length);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
      onClick={(e) => e.stopPropagation()}
    >
      {images.length > 1 && (
        <>
          <button 
            onClick={prevImage} 
            className="absolute left-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white" 
            aria-label="Previous image"
          >←</button>
          <span className="absolute top-6 right-6 rounded-full bg-black/70 px-3 py-1 text-sm font-medium text-white">
            {currentIndex + 1} / {images.length}
          </span>
          <button 
            onClick={nextImage} 
            className="absolute right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white" 
            aria-label="Next image"
          >→</button>
        </>
      )}
      <button 
        onClick={onClose} 
        className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70" 
        aria-label="Close gallery"
      >✕</button>
      <div className="flex h-full w-full items-center justify-center p-4">
        <Image 
          src={images[currentIndex]} 
          alt={`Project screenshot ${currentIndex + 1}`} 
          className="max-h-full max-w-full object-contain rounded shadow-2xl" 
          style={{ maxHeight: '80vh' }} 
        />
      </div>
    </div>
  );
};

export function ProjectCard({ project, sizes, className }: ProjectCardProps) {
  const hasScreenshot = !!project.screenshot;
  const hasGallery = project.screenshots && project.screenshots.length > 0;
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    console.log("ProjectCard handleClick called");
    console.log("hasScreenshot:", hasScreenshot);
    console.log("hasGallery:", hasGallery);
    
    if (hasGallery || hasScreenshot) {
      console.log("Opening modal...");
      setShowModal(true);
    } else {
      console.log("Neither screenshot nor gallery exists!");
    }
  };

  const handleCloseModal = () => {
    console.log("Closing modal...");
    setShowModal(false);
  };

  const allImages = getAllImageSources(project);

  return (
    <>
      <Card surface="outlined" className={cn("flex h-full flex-col gap-6", className)}>
        {hasScreenshot && (
          <BrowserFrame domain={project.domain ?? project.name}>
            <div 
              className="relative cursor-pointer overflow-hidden" 
              onClick={handleClick}
            >
              <Image
                src={project.screenshot!.src}
                alt={project.screenshot!.alt}
                sizes={sizes}
                placeholder="blur"
                className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
              />
              {hasGallery ? (
                <div className="absolute bottom-3 right-3 rounded-full bg-black/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm z-10 pointer-events-none">
                  🖼️ Click to view gallery ({allImages.length})
                </div>
              ) : null}
            </div>
          </BrowserFrame>
        )}
        <div className="flex flex-col gap-3">
          <Text as="h3" variant="title-lg">{project.name}</Text>
          <Text variant="body-md" className="text-pretty">{project.description}</Text>
          <p className={tokens.overrides["card-meta"]}>{project.role}</p>
        </div>
        <ul role="list" className="flex flex-wrap gap-2">
          {project.stack.map((item) => (<li key={item}><Badge>{item}</Badge></li>))}
        </ul>
        {project.href ? (
          <Button variant="text-link" asChild className="mt-auto inline-flex items-center gap-1.5 self-start py-2">
            <Link href={project.href!} variant="inline">{project.linkLabel || "Learn more"}<Icon icon={ArrowUpRight} /></Link>
          </Button>
        ) : null}
      </Card>
      
      {/* Gallery Modal */}
      {showModal && allImages.length > 0 && (
        <ModalCarousel images={allImages} onClose={handleCloseModal} />
      )}
    </>
  );
}
