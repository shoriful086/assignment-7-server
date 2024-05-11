import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HeroImage from "/src/assets/landingPage/heroImage.png";

const HeroSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        pt: 8,
        mb: -6,
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#d8c0c2",
      }}
    >
      <Box>
        <Typography
          variant="h1"
          fontSize={20}
          color="primary.main"
          mb={2}
          mt={6}
          fontWeight={600}
        >
          Speak Hope for the Homeless
        </Typography>

        <Typography
          sx={{
            wordSpacing: 8,
          }}
          variant="h1"
          fontSize={56}
          fontWeight={600}
        >
          Donate to children
        </Typography>
        <Typography variant="h1" fontSize={56} fontWeight={600}>
          & senior citizens
        </Typography>

        <Typography
          sx={{
            wordSpacing: 8,
          }}
          variant="h1"
          component="p"
          fontSize={18}
          width="70%"
          my={4}
        >
          Involves donating one's body after death for medical research,
          education, or anatomical dissection. Body donation plays a crucial
          role in advancing medical science
        </Typography>
        <Box>
          <Button
            sx={{
              borderRadius: "30px",
              marginRight: "10px",
              padding: "10px 30px",
            }}
          >
            Donate Now
          </Button>
          <Button
            sx={{
              borderRadius: "30px",
              marginRight: "10px",
              padding: "10px 30px",
            }}
            variant="outlined"
          >
            Join Volunteers
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          justifyContent: "space-between",
          display: isSmallScreen ? "none" : "block", // Hide on small screens
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box>
            <img width={700} src={HeroImage} alt="heroImage" />
          </Box>
          <Box
            sx={{
              marginLeft: "20px",
            }}
          >
            <Box>
              <Box mb={4}>
                <Typography variant="h1" fontSize={48} fontWeight={600}>
                  12+
                </Typography>
                <Typography variant="h1" fontSize={18}>
                  Years of
                </Typography>
                <Typography variant="h1" fontSize={18}>
                  Experience
                </Typography>
              </Box>
              <Box mb={4}>
                <Typography variant="h1" fontSize={48} fontWeight={600}>
                  140+
                </Typography>
                <Typography variant="h1" fontSize={18}>
                  Thousands
                </Typography>
                <Typography variant="h1" fontSize={18}>
                  Volunteers
                </Typography>
              </Box>
              <Box>
                <Typography variant="h1" fontSize={48} fontWeight={600}>
                  500+
                </Typography>
                <Typography variant="h1" fontSize={18}>
                  World wide
                </Typography>
                <Typography variant="h1" fontSize={18}>
                  Offices
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
