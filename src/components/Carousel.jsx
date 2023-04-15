import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import images from "../data/carouselImage";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box>
      <Box>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: "auto",
                    maxHeight: "80",
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Box>
      {/* <Box
        sx={{ display: "flex", position: "absolute" }}
        width="1"
        justifyContent="space-between"
      >
        <IconButton
          onClick={handleBack}
          disabled={activeStep === 0}
          color="success"
        >
          <KeyboardArrowLeft fontSize="large" />
        </IconButton>
        <IconButton
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
          color="success"
        >
          <KeyboardArrowRight fontSize="large" />
        </IconButton>
      </Box> */}
    </Box>
  );
}

export default Carousel;
