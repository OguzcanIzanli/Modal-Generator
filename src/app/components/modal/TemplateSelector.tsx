import React from "react";
import { Template1, Template2 } from "./Templates";
import { ModalDataType } from "@/app/data/modalData";
import { useModal } from "../../context/ModalContext";

interface TemplateProps {
  modalData: ModalDataType;
}

interface TemplateSelectorProps {
  modalData: ModalDataType;
}

const TemplateMap: { [key: number]: React.FC<TemplateProps> } = {
  1: Template1,
  2: Template2,
};

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ modalData }) => {
  const { modal } = useModal();
  const SelectedTemplate = TemplateMap[modal.id];

  if (!SelectedTemplate) {
    return <div>Template not found!</div>;
  }

  return <SelectedTemplate modalData={modalData} />;
};

export default TemplateSelector;
