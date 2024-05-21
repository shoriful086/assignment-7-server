/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Typography } from "@mui/material";
import Chart from "./PieChart";
import BarChartApp from "./BarChart";
import { useGetAllDonateQuery } from "../../../redux/api/donateApi/donate.api";
import { useGetAllReliefQuery } from "../../../redux/api/reliefApi/relief.api";
import { useGetAllUserQuery } from "../../../redux/api/userApi/user.api";
import Loading from "../../../components/Loading";

const donateIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
    />
  </svg>
);

const userIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);

const postIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
    />
  </svg>
);

// const adminItems = [
//   {
//     id: 1,
//     name: "Total Donate",
//     amount: 200,
//     icon: (

//     ),
//   },
//   {
//     id: 2,
//     name: "Today Donate",
//     amount: 210,
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="currentColor"
//         className="w-6 h-6"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//         />
//       </svg>
//     ),
//   },
//   {
//     id: 3,
//     name: "Total User",
//     amount: 20,
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="currentColor"
//         className="w-6 h-6"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
//         />
//       </svg>
//     ),
//   },
//   {
//     id: 1,
//     name: "Donated User",
//     amount: 6,
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="currentColor"
//         className="w-6 h-6"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
//         />
//       </svg>
//     ),
//   },
// ];

const Dashboard = () => {
  const { data, isLoading: amountLoading } = useGetAllDonateQuery(undefined);
  const { data: reliefData, isLoading: reliefLoading } =
    useGetAllReliefQuery(undefined);
  const { data: userData, isLoading: userLoading } =
    useGetAllUserQuery(undefined);

  // calculate total donated amount
  const totalAmount = data?.data.reduce((acc: number, item: any) => {
    return acc + Number(item.amount);
  }, 0);

  // calculate total donated amount
  const totalPost = reliefData?.data.length;

  // calculate total user
  const totalUser = userData?.data.length;

  if (amountLoading || reliefLoading || userLoading) {
    return <Loading />;
  }
  return (
    <Container>
      <section className=" m-4 lg:ml-52 ">
        <Typography my={4} fontSize={28} fontWeight={500}>
          Overview
        </Typography>
        <div className="w-full">
          <div className="grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
            {/* *****total donated amount **** */}

            <div className="flex  items-center bg-white shadow-lg  rounded-lg p-4">
              <p className="bg-gray-200 p-2 rounded-full">{donateIcon}</p>
              <div className="ml-4">
                <Typography fontWeight={600} fontSize={24}>
                  ${totalAmount}
                </Typography>
                <Typography>Total Donate</Typography>
              </div>
            </div>

            {/* *****total user **** */}

            <div className="flex  items-center bg-white shadow-lg  rounded-lg p-4">
              <p className="bg-gray-200 p-2 rounded-full">{userIcon}</p>
              <div className="ml-4">
                <Typography fontWeight={600} fontSize={24}>
                  {totalUser}
                </Typography>
                <Typography>Total User</Typography>
              </div>
            </div>

            {/* *****total relief post **** */}

            <div className="flex  items-center bg-white shadow-lg  rounded-lg p-4">
              <p className="bg-gray-200 p-2 rounded-full">{postIcon}</p>
              <div className="ml-4">
                <Typography fontWeight={600} fontSize={24}>
                  {totalPost}
                </Typography>
                <Typography>Total Relief Post</Typography>
              </div>
            </div>
          </div>
        </div>

        <section className="w-full my-20 ">
          <div className="flex flex-col lg:flex-row justify-between gap-8 items-center">
            <div>
              {/* <AllDonateDetails /> */}
              <BarChartApp />
            </div>

            <div className="w-full h-[45vh] flex flex-col mx-auto  bg-white rounded-lg">
              <Typography
                fontSize={20}
                fontWeight={600}
                sx={{
                  textAlign: "start",
                  p: 2,
                }}
              >
                Supply Statistics
              </Typography>
              <div className="flex justify-center items-center -mt-10">
                <Chart />
              </div>
            </div>
          </div>
        </section>
      </section>
    </Container>
  );
};

export default Dashboard;
