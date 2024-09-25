import { modalData } from "@/app/data/modalData";

console.log(modalData[0]);

const Template1 = () => {
  return (
    <div className={`${modalData[0].container} ${modalData[0].sizes.medium}`}>
      <div className={modalData[0].logo}></div>
      <div className={modalData[0].title.style}>
        {modalData[0].title.content}
      </div>
      <div className={modalData[0].contents.style}>
        {modalData[0].contents.content}
      </div>
      <input
        type="text"
        className={modalData[0].inputs.style}
        placeholder={modalData[0].inputs.placeholder}
      />

      <div className={modalData[0].buttons.style}>
        <button className={modalData[0].buttons.button1.style}>
          {modalData[0].buttons.button1.content}
        </button>
        <button className={modalData[0].buttons.button2.style}>
          {modalData[0].buttons.button2.content}
        </button>
      </div>
    </div>
  );
};

export default Template1;
