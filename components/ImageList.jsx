'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Parallax } from './Parallax';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';
import Modal from './Modal';

const images = [
  {
    source: `https://picsum.photos/900/500?random=1`,
    alt: 'Image',
    width: 900,
    height: 500,
    priority: true,
    sizes: '50vw',
    class: 'self-start cursor-pointer',
    speed: 1,
    vidSource: 'https://player.vimeo.com/video/610505833?h=63772064cf',
    text: 'Dior',
  },
  {
    source: `https://picsum.photos/500/900?random=2`,
    alt: 'Image',
    width: 500,
    height: 900,
    priority: true,
    sizes: '50vw',
    class: 'self-end cursor-pointer',
    speed: -2,
    vidSource: 'https://player.vimeo.com/video/610505833?h=63772064cf',
    text: 'Dior',
  },
  {
    source: `https://picsum.photos/900/500?random=3`,
    alt: 'Image',
    width: 900,
    height: 500,
    priority: false,
    sizes: '50vw',
    class: 'self-start cursor-pointer',
    speed: -1,
    vidSource: 'https://player.vimeo.com/video/610505833?h=63772064cf',
    text: 'Dior',
  },
  {
    source: `https://picsum.photos/500/900?random=4`,
    alt: 'Image',
    width: 500,
    height: 900,
    priority: false,
    sizes: '50vw',
    class: 'self-start cursor-pointer',
    speed: -2,
    vidSource: 'https://player.vimeo.com/video/610505833?h=63772064cf',
    text: 'Dior',
  },
  {
    source: `https://picsum.photos/900/500?random=5`,
    alt: 'Image',
    width: 900,
    height: 500,
    priority: false,
    sizes: '50vw',
    class: 'self-center cursor-pointer',
    speed: -2,
    vidSource: 'https://player.vimeo.com/video/610505833?h=63772064cf',
    text: 'Dior',
  },
  {
    source: `https://picsum.photos/900/500?random=6`,
    alt: 'Image',
    width: 900,
    height: 500,
    priority: false,
    sizes: '50vw',
    class: 'self-end cursor-pointer',
    speed: -1,
    vidSource: 'https://player.vimeo.com/video/610505833?h=63772064cf',
    text: 'Dior',
  },
  {
    source: `https://picsum.photos/500/900?random=7`,
    alt: 'Image',
    width: 500,
    height: 900,
    priority: false,
    sizes: '50vw',
    class: 'self-end cursor-pointer',
    speed: 1,
    vidSource: 'https://player.vimeo.com/video/610505833?h=63772064cf',
    text: 'Dior',
  },
  {
    source: `https://picsum.photos/900/500?random=8`,
    alt: 'Image',
    width: 900,
    height: 500,
    priority: false,
    sizes: '50vw',
    class: 'self-start cursor-pointer',
    speed: -4,
    vidSource: 'https://player.vimeo.com/video/610505833?h=63772064cf',
    text: 'Dior',
  },
  {
    source: `https://picsum.photos/500/900?random=9`,
    alt: 'Image',
    width: 500,
    height: 900,
    priority: true,
    sizes: '50vw',
    class: 'self-center cursor-pointer',
    speed: -1,
    vidSource: 'https://player.vimeo.com/video/610505833?h=63772064cf',
    text: 'Dior',
  },
];

const ImageList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  function openModal(image) {
    setSelectedImage(image);
    setIsOpen(true);
  }

  function closeModal() {
    setSelectedImage(null);
    setIsOpen(false);
  }

  return (
    <>
      {images.map((img, index) => (
        <Parallax
          speed={img.speed}
          key={index}
          className={`${img.class} scale-75 2xl:scale-100 z-[60]`}
        >
          <motion.div
            variants={fadeIn(`${index % 2 === 0 ? 'right' : 'left'}`, 0.4)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className="relative h-full w-full group"
            onClick={() => openModal(img)}
          >
            <Image
              src={img.source}
              alt={img.alt}
              width={img.width}
              height={img.height}
              priority={img.priority}
              sizes={img.sizes}
            />
            <div className="absolute top-0 left-0 w-full h-full hidden group-hover:flex group-hover:justify-center group-hover:items-center bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out" />
            <div className="absolute top-0 left-0 w-full h-full justify-center items-center flex text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out ">
              {img.text}
            </div>
          </motion.div>
        </Parallax>
      ))}
      {selectedImage && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="h-0 w-full pb-[100%] sm:pb-[80%] md:pb-[60%] ">
            <div className="absolute top-0 left-0 w-full h-full flex flex-col">
              <div className="w-full h-full bg-black relative">
                <iframe
                  src={selectedImage.vidSource}
                  width="1920"
                  height="1080"
                  allowfullscreen
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ImageList;
