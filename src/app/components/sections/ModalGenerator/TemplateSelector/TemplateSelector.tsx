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
} from "../../../modal/Templates";

interface TemplateProps {
  modalData: ModalDataType;
}

const TemplateMap: { [key: number]: React.FC<TemplateProps> } = {
  1: Template1,
  2: Template2,
  3: Template3,
  4: Template4,
  5: Template5,
  6: Template6,
  7: Template7,
  8: Template8,
  9: Template9,
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
