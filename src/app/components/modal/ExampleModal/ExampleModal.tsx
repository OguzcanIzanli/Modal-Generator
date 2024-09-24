import IconClose from "@/app/components/ui/icons/IconClose";
import Image from "next/image";

const ExampleModal = () => {
  return (
    <div className="w-2/3 bg-white flex rounded-3xl overflow-hidden">
      <div className="w-1/2 flex flex-col items-center p-10">
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
        />
        <button className="absolute text-2xl top-6 right-6 bg-white p-2 rounded-full">
          <IconClose />
        </button>
      </div>
    </div>
  );
};

export default ExampleModal;
