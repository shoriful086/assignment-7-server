/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useDeleteReliefMutation,
  useGetAllReliefQuery,
} from "../../../redux/api/reliefApi/relief.api";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import UpdateSupplyModal from "./UpdateSupplyModal";
import Loading from "../../../components/Loading";

const trash = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-8 lg:size-10 bg-red-500 text-white rounded p-1 lg:p-2 cursor-pointer"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
    />
  </svg>
);

const Supplies = () => {
  const { data: supplies, isLoading } = useGetAllReliefQuery(undefined);
  const [deleteRelief] = useDeleteReliefMutation();

  const handleDelete = async (id: string) => {
    const res = await deleteRelief(id).unwrap();
    if (res) {
      toast.success(res?.message);
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className=" m-4 lg:ml-[300px] lg:mr-[50px] ">
      <div className="flex justify-between items-center">
        <Typography fontSize={24} fontWeight={500} mb={2}>
          All Supplies
        </Typography>
        <Button>
          <Link to="/dashboard/create-supply">Add New</Link>
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {supplies?.data.map((row: any) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell
                  sx={{
                    fontSize: 16,
                  }}
                >
                  ${row.amount}
                </TableCell>

                <UpdateSupplyModal item={row} />

                <TableCell
                  onClick={() => handleDelete(row._id)}
                  sx={{
                    width: 40,
                    borderRadius: "10px",
                  }}
                >
                  {trash}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default Supplies;
