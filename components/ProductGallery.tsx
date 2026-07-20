"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface ProductGalleryProps {
  images: {
    asset: {
      url: string
    }
  }[]
  name: string
}

export default function ProductGallery({
  images,
  name,
}: ProductGalleryProps) {

  const [selectedImage, setSelectedImage] = useState(0)

  const [isOpen, setIsOpen] = useState(false)


  const nextImage = () => {
    setSelectedImage((prev) =>
      prev === images.length - 1
        ? 0
        : prev + 1
    )
  }


  const prevImage = () => {
    setSelectedImage((prev) =>
      prev === 0
        ? images.length - 1
        : prev - 1
    )
  }


  return (
    <>
      {/* Ảnh chính */}
      <div
        className="
          aspect-square
          overflow-hidden
          rounded-lg
          cursor-pointer
          bg-gray-100
        "
        onClick={() => setIsOpen(true)}
      >

        <img
          src={images[selectedImage]?.asset.url}
          alt={name}
          className="
            w-full
            h-full
            object-cover
            hover:scale-105
            transition
          "
        />

      </div>


      {/* Thumbnail */}
      <div className="flex gap-3 mt-4">

        {images.map((img,index)=>(

          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`
              w-20
              h-20
              rounded-md
              overflow-hidden
              border
              ${
                selectedImage === index
                ? "ring-2 ring-emerald-500"
                : ""
              }
            `}
          >

            <img
              src={img.asset.url}
              alt={`${name}-${index}`}
              className="
                w-full
                h-full
                object-cover
              "
            />

          </button>

        ))}

      </div>



      {/* MODAL ZOOM */}
      {isOpen && (

        <div
          className="
            fixed
            inset-0
            z-50
            bg-black/80
            flex
            items-center
            justify-center
          "
          onClick={() => setIsOpen(false)}
        >


          {/* Nút đóng */}
          <button
            className="
              absolute
              top-5
              right-5
              text-white
            "
            onClick={() => setIsOpen(false)}
          >

            <X size={32}/>

          </button>



          {/* Prev */}
          <button
            className="
              absolute
              left-5
              text-white
            "
            onClick={(e)=>{
              e.stopPropagation()
              prevImage()
            }}
          >

            <ChevronLeft size={48}/>

          </button>



          {/* Ảnh zoom */}
          <img
            src={images[selectedImage].asset.url}
            alt={name}
            className="
              max-h-[90vh]
              max-w-[90vw]
              object-contain
            "
            onClick={(e)=>e.stopPropagation()}
          />



          {/* Next */}
          <button
            className="
              absolute
              right-5
              text-white
            "
            onClick={(e)=>{
              e.stopPropagation()
              nextImage()
            }}
          >

            <ChevronRight size={48}/>

          </button>


        </div>

      )}

    </>
  )
}