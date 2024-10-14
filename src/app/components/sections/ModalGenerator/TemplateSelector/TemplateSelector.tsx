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
  Template18,
  Template19,
  Template20,
  Template21,
} from "../../../modal/Templates";

interface TemplateProps {
  modalData: ModalDataType;
}

const TemplateMap: { [key: number]: React.FC<TemplateProps> } = {
  1: Template1,
  2: Template2,
  3: Template3,
  4: Template4,
  5: Template4,
  6: Template1,
  7: Template21,
  8: Template6,
  9: Template2,
  10: Template7,
  11: Template8,
  12: Template9,
  13: Template10,
  14: Template11,
  15: Template5,
  16: Template12,
  17: Template13,
  18: Template14,
  19: Template15,
  20: Template16,
  21: Template17,
  22: Template18,
  23: Template19,
  24: Template20,
  25: Template8,
  26: Template5,
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
