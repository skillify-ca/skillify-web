export const returnWebDevStyle = (assignmentReviewed: boolean) => {
    let webDevStyle = "";
    if (assignmentReviewed === true) {
      webDevStyle = "ml-1";
    } else {
      webDevStyle = "ml-3";
    }
    return webDevStyle;
  };
