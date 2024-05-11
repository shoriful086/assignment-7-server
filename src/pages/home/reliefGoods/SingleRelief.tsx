import { Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetSingleReliefQuery } from "../../../redux/api/reliefApi/relief.api";
import DonateModal from "./DonateModal";

const SingleRelief = () => {
  const { id } = useParams();
  const { data } = useGetSingleReliefQuery(id);

  return (
    <Container
      sx={{
        height: "85vh",
        my: 20,
      }}
    >
      <Box>
        <Box>
          <img
            className="w-full shadow border-2 border-gray-50/100 h-96 lg:h-[500px] rounded-lg"
            src={data?.data.image}
            alt="image"
          />
        </Box>
        <div>
          <div className="flex justify-between items-center mt-4">
            <h1 className="mt-4 text-lg lg:text-2xl">{data?.data.title}</h1>
            <p className="bg-[#00715D] p-2 rounded-md text-white font-medium">
              ${data?.data.amount}
            </p>
          </div>
          <p className="text-orange-600 text-sm lg:text-lg ">
            {data?.data.category}
          </p>
          <p className="mt-5">{data?.data.description}</p>
        </div>
      </Box>

      <div className="w-full mt-10 lg:mt-20 flex justify-end">
        <DonateModal data={data?.data} />
      </div>
    </Container>
  );
};

export default SingleRelief;
