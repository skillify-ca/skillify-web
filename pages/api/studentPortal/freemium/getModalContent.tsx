import React from "react";
import { ModalStage } from "../../../../components/studentPortal/freemium/FreemiumDialogueComponent";
import Upgrade from "../../../../components/studentPortal/freemium/modals/Upgrade";
import Welcome from "../../../../components/studentPortal/freemium/modals/Welcome";
import WhereToStart from "../../../../components/studentPortal/freemium/modals/WhereToStart";

export const getModalContent = (stage) => {
  switch (stage) {
    case ModalStage.ONE:
      return <Welcome />;
    case ModalStage.TWO:
      return <Upgrade />;
    case ModalStage.THREE:
      return <WhereToStart />;
    default:
      return null;
  }
};
