import React from "react";
import Image from "next/image";

// Icon
import IconClose from "@icons/IconClose";
import IconLightning from "@icons/IconLightning";
import IconDollarSign from "@icons/IconDollarSign";

const ExampleModal = () => {
  return (
    <div className="w-2/3 bg-white flex rounded-3xl">
      <div className="w-1/2 flex flex-col items-center p-9">
        <Image
          className="mb-3"
          src="/images/logos/Vector.png"
          width={106}
          height={38}
          alt="Picture of the author"
        />
        <div className="text-[40px] font-bold my-4">Join the club</div>
        <div className="font-normal text-[18px] text-center">
          Subscribe and Get an Extra{" "}
          <span className="underline font-medium">25% Off</span> on your first
          purchase.
        </div>
        <div className="flex flex-col my-6 w-full gap-4">
          <input
            type="text"
            placeholder="Email Address"
            className="border p-3 rounded-xl"
          />
          <button className="bg-black text-white  py-3 rounded-xl">
            Subscribe
          </button>
        </div>
        <div className="text-gray-400 text-[12px]">
          By signing up, you agree to{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Terms of Use
          </a>
          .
        </div>
      </div>

      <div className="w-1/2 relative">
        <Image
          src="/images/modal-images/Example-Modal.png"
          alt="Picture of the author"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="rounded-e-3xl"
        />
        <div className="absolute left-8 bottom-8 text-white text-4xl font-semibold">
          Mediterranean Sneakers®
        </div>

        <div className="absolute top-24 -right-28 flex items-center bg-neutral-50/75 py-3 px-5 rounded-xl font-semibold">
          <div className="bg-amber-500 p-1 rounded-full text-xs text-white mr-2">
            <IconLightning />
          </div>
          Grow email list
        </div>
        <div className="absolute top-40 -right-40 flex items-center bg-neutral-50/75 py-3 px-5 rounded-xl font-semibold">
          <div className="bg-lime-500 p-1 rounded-full text-xs text-white mr-2">
            <IconDollarSign />
          </div>
          Increase sales conversion
        </div>

        <div className="absolute text-2xl top-6 right-6 bg-white p-2 rounded-full">
          <IconClose />
        </div>
      </div>
    </div>
  );
};

export default ExampleModal;
