import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useGetAllReliefQuery } from "../../../redux/api/reliefApi/relief.api";
import Loading from "../../../components/Loading";

export type TReliefProps = {
  _id: string;
  image: string;
  title: string;
  category: string;
  description: string;
  amount: number;
};
const ReliefGoods = () => {
  const { data: reliefGoods, isLoading } = useGetAllReliefQuery(undefined);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Box my={20}>
      <Typography my={6} variant="h2" fontSize={28} fontWeight={400}>
        All Relief Goods
      </Typography>
      <Grid container spacing={4} alignItems="stretch">
        {reliefGoods?.data?.slice(1, 6).map((relief: TReliefProps) => (
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
                <Typography gutterBottom variant="h6" component="p" mt={-2}>
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
                  fontSize={16}
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
      <Box
        sx={{
          textAlign: "end",
          mt: "30px",
        }}
      >
        <Link className="border-2 px-3 py-2 rounded-full" to="/relief-goods">
          View All <ArrowForward />
        </Link>
      </Box>
    </Box>
  );
};

export default ReliefGoods;
