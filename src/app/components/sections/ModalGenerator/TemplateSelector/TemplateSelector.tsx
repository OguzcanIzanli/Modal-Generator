// "use client";

// import React, { Suspense } from "react";
// import dynamic from "next/dynamic";
// import { ModalDataType } from "../../../../data/modalData";
// import { useModal } from "../../../../context/ModalContext";

// interface TemplateProps {
//   modalData: ModalDataType;
// }

// const TemplateSelector = () => {
//   const { modal } = useModal();

//   const SelectedTemplate = dynamic<TemplateProps>(
//     () => import(`../../../modal/Templates/Template${modal.id}`),
//     { suspense: false, ssr: true }
//   );

//   return modal.id ? (
//     <Suspense>
//       <SelectedTemplate modalData={modal} />
//     </Suspense>
//   ) : (
//     <></>
//   );
// };

// export default TemplateSelector;
import React from "react";
import { ModalDataType } from "@/app/data/modalData";
import { useModal } from "../../../../context/ModalContext";
import {
  Template1,
  Template2,
  Template3,
  Template4,
  Template5,
  Template6,
  Template7,
  Template8,
  Template9,
  Template10,
  Template11,
  Template12,
  Template13,
  Template14,
  Template15,
  Template16,
  Template17,
} from "../../../modal/Templates";

interface TemplateProps {
  modalData: ModalDataType;
}

const TemplateMap: { [key: number]: React.FC<TemplateProps> } = {
  1: Template1,
  2: Template2,
  3: Template1,
  4: Template1,
  5: Template1,
  6: Template1,
  7: Template3,
  8: Template6,
  9: Template2,
  10: Template7,
  11: Template1,
  12: Template9,
  13: Template10,
  14: Template11,
  15: Template5,
  16: Template1,
  17: Template13,
  18: Template14,
  19: Template15,
  20: Template16,
  21: Template12,
  22: Template8,
  23: Template4,
  24: Template1,
  25: Template5,
  26: Template17,
};

const TemplateSelector = () => {
  const { modal } = useModal();
  const SelectedTemplate = TemplateMap[modal.id === "" ? 0 : Number(modal.id)];

  if (!SelectedTemplate) {
    return <div></div>;
  }
  return <SelectedTemplate modalData={modal} />;
};
export default TemplateSelector;
