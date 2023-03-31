import { ModalStage } from "../../../../components/studentPortal/freemium/FreemiumDialogComponent";
import OffYouGo from "../../../../components/studentPortal/freemium/Modals/OffYouGo";
import PremiumFeatures from "../../../../components/studentPortal/freemium/Modals/PremiumFeatures";
import Upgrade from "../../../../components/studentPortal/freemium/Modals/Upgrade";
import Welcome from "../../../../components/studentPortal/freemium/Modals/Welcome";
import WhereToStart from "../../../../components/studentPortal/freemium/Modals/WhereToStart";

export const getModalContent = (stage) => {
  switch (stage) {
    case ModalStage.ONE:
      return <Welcome />;
    case ModalStage.TWO:
      return <PremiumFeatures />;
    case ModalStage.THREE:
      return <Upgrade />;
    case ModalStage.FOUR:
      return <WhereToStart />;
    case ModalStage.FIVE:
      return <OffYouGo />;
    default:
      return null;
  }
};
