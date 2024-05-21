/* eslint-disable @typescript-eslint/no-explicit-any */
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { useGetAllReliefQuery } from "../../../redux/api/reliefApi/relief.api";
import Loading from "../../../components/Loading";

const Chart = () => {
  const {
    data: reliefData,
    isLoading,
    isError,
  } = useGetAllReliefQuery(undefined);

  if (isLoading) return <Loading />;
  if (isError) return <div>Error occurred while fetching data</div>;

  // const getArcLabel = () => {
  //   const name = reliefData?.data.map((item: any) => item.amount);
  //   return name;
  // };

  // Generate a random color
  const getRandomColor = (index: number) => {
    const colors = ["#00C49F", "#0088FE", "#FFBB28", "#FF8042"];
    return colors[index % colors.length];
  };

  // Transforming reliefData to the required format and assigning colors
  const data =
    reliefData?.data.map((item: any, index: number) => ({
      label: item.category,
      value: item.amount,
      color: getRandomColor(index),
    })) || [];

  // Chart sizing options
  const sizing = {
    margin: { right: 5 },
    width: 400,
    height: 400,
    legend: { hidden: true },
  };

  return (
    <PieChart
      series={[
        {
          outerRadius: 80,
          data,
          // arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "white",
          fontSize: 14,
        },
      }}
      {...sizing}
    />
  );
};

export default Chart;
