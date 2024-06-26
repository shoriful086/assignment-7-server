import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useGetAllReliefQuery } from "../../redux/api/reliefApi/relief.api";
import { Link } from "react-router-dom";
import { TReliefProps } from "../home/reliefGoods/ReliefGoods";
import Loading from "../../components/Loading";

const AllReliefGoods = () => {
  const { data: reliefs, isLoading } = useGetAllReliefQuery(undefined);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container
      sx={{
        mb: 10,
        mt: 5,
      }}
    >
      <Typography mt={20} mb={5} variant="h1" fontSize={24} fontWeight={600}>
        All Relief Goods
      </Typography>
      <Grid container spacing={4} alignItems="stretch">
        {reliefs?.data?.map((relief: TReliefProps) => (
          <Grid
            sx={{
              "& img": {
                width: "100%",
                height: "250px",
              },
            }}
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            key={relief._id}
          >
            <Card sx={{ display: "flex", flexDirection: "column" }}>
              <CardMedia
                sx={{ p: 2, borderRadius: "25px" }}
                component="img"
                image={relief.image}
                alt={relief.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  fontSize={16}
                  gutterBottom
                  variant="h6"
                  component="p"
                  mt={-2}
                >
                  {relief.title}
                </Typography>
                <Typography
                  sx={{
                    mt: -1,
                    borderRadius: "30px",
                    padding: "5px",
                    cursor: "pointer",
                  }}
                  variant="body2"
                  color="text.secondary"
                  fontWeight={500}
                  fontSize={14}
                >
                  {relief.category}
                </Typography>
                <Typography fontWeight={600} fontSize={24}>
                  $ {relief.amount}
                </Typography>
              </CardContent>
              <CardActions
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Button
                  sx={{ borderRadius: "30px", padding: "8px 20px" }}
                  size="small"
                >
                  Donate Now
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "30px",
                    padding: "8px 20px",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      transition: "ease-in-out",
                      color: "white",
                    },
                  }}
                  size="small"
                >
                  <Link to={`/relief-goods/${relief._id}`}> View Details</Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllReliefGoods;
