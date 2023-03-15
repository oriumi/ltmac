import React from "react";
import Image, { StaticImageData } from "next/image";

interface PropsType {
  imageUrl: StaticImageData;
  title: string;
  quantity: string;
  classification: string;
  comments?: string;
}

const Card = ({
  imageUrl,
  title,
  quantity,
  classification,
  comments,
}: PropsType) => {
  const [valueCropped, setValueCropped] = React.useState(0);
  const [croppedText, setCroppedText] = React.useState("");

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 415) {
        setValueCropped(50);
      } else if (window.innerWidth < 640) {
        setValueCropped(90);
      } else {
        setValueCropped(50);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (comments) {
      setCroppedText(
        comments.length > valueCropped
          ? `${comments.slice(0, valueCropped)}...`
          : comments
      );
    }
  }, [comments, valueCropped]);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-lg">
      <div className="grid grid-cols-2 gap-0">
        <div className="flex-shrink-0 h-56">
          <Image
            className="object-cover w-full h-full bg-gray-800"
            src={imageUrl}
            alt={title}
          />
        </div>
        <div className="px-6 py-4 h-56">
          <h3 className="font-bold text-gray-600 text-sm sm:text-base md:text-lg">
            {title}
          </h3>
          <p className="mt-2 text-sm sm:text-base md:text-md">
            <b className="text-gray-600 font-semibold">Quantidade:</b>{" "}
            {quantity}
          </p>
          <p className="mt-2 text-sm sm:text-base md:text-md">
            <b className="text-gray-600 font-semibold">Classificação:</b>{" "}
            {classification}
          </p>
          <p className="mt-2 text-sm sm:text-base md:text-md">
            <b className="text-gray-600 font-semibold">Observações:</b>{" "}
            {croppedText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
