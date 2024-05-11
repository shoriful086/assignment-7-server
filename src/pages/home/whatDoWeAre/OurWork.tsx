/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    name: "Medical & Blood",
    description:
      "When deciding which charity to donate to, it important to do your research.",
    image:
      "https://content.presspage.com/uploads/1873/1920_donatingblood.jpg?10000",
  },
  {
    id: 2,
    name: "Food",
    description:
      "When deciding which charity to donate to, it important to do your research.",
    image:
      "  https://d1vdjc70h9nzd9.cloudfront.net/media/campaign/134000/134677/image/5db30432b104b.jpeg",
  },
  {
    id: 3,
    name: "Health",
    description:
      "When deciding which charity to donate to, it important to do your research.",
    image: "https://ruralreporters.com/wp-content/uploads/2017/10/Health.jpg",
  },
  {
    id: 4,
    name: "Education",
    description:
      "When deciding which charity to donate to, it important to do your research.",
    image:
      "https://i.pinimg.com/originals/89/d2/df/89d2df3b22deb8589bbbc0b3dbab5b88.jpg",
  },
];

const OurWork = () => {
  return (
    <Container
      sx={{
        my: 10,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mt: 14,
          mb: 6,
          textAlign: "center",
        }}
      >
        Who we are/ What we do
      </Typography>
      <Grid container spacing={2}>
        {items.map((item: any) => (
          <Grid
            item
            key={item.id}
            justifyContent="space-between"
            sm={12}
            md={4}
            lg={3}
            gap={2}
            textAlign="center"
          >
            <Card
              sx={{
                p: 3,
                cursor: "pointer",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                  transition: "0.3s ease-in-out",
                },
              }}
            >
              <img
                className="w-full h-44 lg:size-24 lg:rounded-full mx-auto"
                src={item.image}
              />
              <Typography variant="h6" fontWeight={600} mt={2}>
                {item.name}
              </Typography>
              <Typography variant="h6" fontWeight={400} fontSize={16} mb={2}>
                {item.description}
              </Typography>
              <Link className=" font-bold" to="/">
                Read more...
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OurWork;
