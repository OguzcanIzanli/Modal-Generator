import { ModalDataType } from "@/app/data/modalData";
import React from "react";
import Image from "next/image";

interface FeedbackProps {
  feedback: ModalDataType["feedback"];
  sizes: ModalDataType["sizes"];
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
  label: boolean;
}

const feedbackUrls = [
  "feedbackURL1",
  "feedbackURL2",
  "feedbackURL3",
  "feedbackURL4",
  "feedbackURL5",
];

const Feedback: React.FC<FeedbackProps> = ({
  feedback,
  handleClick,
  sizes,
  label,
}) => {
  return (
    <>
      {feedback && (
        <div className="flex justify-between text-black mt-[6%]">
          {feedbackUrls.map((item) => (
            <div key={item}>
              {feedback?.[item as keyof typeof feedback] && (
                <button
                  className="rounded-full flex flex-col gap-2 items-center justify-center transition hover:scale-125 hover:font-bold active:scale-110"
                  onClick={handleClick}
                  id={
                    feedback[
                      (item + "Label") as keyof typeof feedback
                    ] as string
                  }
                >
                  <Image
                    src={feedback[item as keyof typeof feedback] || ""}
                    className="w-2/3"
                    width={0}
                    height={0}
                    unoptimized
                    alt={item}
                  />
                  {label && (
                    <span
                      className={`${
                        sizes === "w-[320px]"
                          ? "text-xs"
                          : sizes === "w-[640px]"
                          ? "text-xl"
                          : "text-base"
                      }`}
                    >
                      {feedback[(item + "Label") as keyof typeof feedback]}
                    </span>
                  )}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Feedback;
