/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Divider } from "@mui/material";
import { useGetAllDonateQuery } from "../../redux/api/donateApi/donate.api";
import Loading from "../../ulits/Loading";

const LeaderBoard = () => {
  const { data: donates, isLoading } = useGetAllDonateQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  // Sort the donates array based on amount in descending order
  const sortedDonates = [...donates?.data].sort(
    (a: any, b: any) => b.amount - a.amount
  );

  return (
    <Container>
      <section className="h-[100%] my-20">
        <h1 className="text-2xl text-black py-10">LeaderBoard</h1>
        <div className="border border-gray-200 p-4 rounded-lg">
          <div className="flex flex-row justify-between items-center p-4">
            <p>Name</p>
            <p>Email</p>
            <p>Amount</p>
          </div>
          <Divider />
          {sortedDonates?.map((donate: any) => (
            <div
              className="flex flex-row justify-between items-center shadow mt-5 mb-2 p-5 rounded"
              key={donate._id}
            >
              <h1> {donate.name}</h1>
              <p>
                {" "}
                {donate.email.length > 20
                  ? donate.email.substr(0, 20) + "..."
                  : donate.email}
              </p>
              <h1 className="text-lg font-medium"> ${donate.amount}</h1>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default LeaderBoard;
