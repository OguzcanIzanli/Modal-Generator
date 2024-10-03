"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { ModalDataType } from "../../../../data/modalData";
import { useModal } from "../../../../context/ModalContext";

interface TemplateProps {
  modalData: ModalDataType;
}

const TemplateSelector = () => {
  const { modal } = useModal();

  const SelectedTemplate = dynamic<TemplateProps>(
    () => import(`../../../modal/Templates/${modal.template}`),
    { suspense: true, ssr: true }
  );

  return modal.template ? (
    <Suspense fallback={<div>Loading template...</div>}>
      <SelectedTemplate modalData={modal} />
    </Suspense>
  ) : (
    <></>
  );
};

export default TemplateSelector;
