"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Modal, Carousel } from "antd";

export default function VenueImageSlider({
  images,
}: {
  images: { sort: number; url: string }[];
}) {
  const [selectedImage, setSelectedImage] = useState<{
    sort: number;
    url: string;
  }>(images[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStartIndex, setModalStartIndex] = useState(0);

  const openModal = (index: number) => {
    setModalStartIndex(index);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-4 rounded-md overflow-hidden">
        {/* Main Image */}
        <div
          className="w-full md:flex-1 aspect-video relative overflow-hidden border rounded-md cursor-pointer"
          onClick={() => openModal(images.indexOf(selectedImage))}
        >
          <Image
            src={selectedImage.url}
            alt="selectedImage"
            fill
            className="object-cover"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 md:flex-col mt-2 md:mt-0 w-full md:w-[150px]">
          {[...images.slice(0, 3), images[0]].map((img, idx) => {
            const isBlurred = idx === 3;
            const indexInImages = idx === 3 ? 3 : idx;

            return (
              <div
                key={`thumb-${idx}`}
                className="relative flex-1 cursor-pointer border overflow-hidden rounded-md aspect-video"
                onClick={() => openModal(indexInImages)}
              >
                <Image
                  src={img.url}
                  alt={`image-${idx}`}
                  fill
                  className={`object-cover ${isBlurred ? "blur-sm" : ""}`}
                />
                {isBlurred && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-bold text-sm">
                    + {images.length - 3} صور
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal with Carousel */}
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
        width="70%"
        className="!p-0 custom-modal"
        style={{ background: "rgba(0, 0, 0, 0.3)", borderRadius: "10px" }}
        maskClosable
        mask={true}
        getContainer={false} // renders inside current DOM
      >
        <Carousel
          initialSlide={modalStartIndex}
          dots
          arrows
          className="w-full h-[80vh] bg-transparent rounded-md"
        >
          {images.map((img, i) => (
            <div key={`modal-image-${i}`} className="relative w-full h-[80vh]">
              <Image
                src={img.url}
                alt={`modal-${i}`}
                fill
                className="object-contain rounded-md"
              />
            </div>
          ))}
        </Carousel>
      </Modal>
    </>
  );
}
