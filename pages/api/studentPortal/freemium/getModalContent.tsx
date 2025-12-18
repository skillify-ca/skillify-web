import React from "react";
import { ModalStage } from "../../../../components/studentPortal/freemium/FreemiumDialogueComponent";
import Upgrade from "../../../../components/studentPortal/freemium/modals/Upgrade";
import Welcome from "../../../../components/studentPortal/freemium/modals/Welcome";

export const getModalContent = (stage) => {
  switch (stage) {
    case ModalStage.ONE:
      return <Welcome />;
    case ModalStage.TWO:
      return <Upgrade />;
    // case ModalStage.THREE:
      // return <WhereToStart />;
    default:
      return null;
  }
};
