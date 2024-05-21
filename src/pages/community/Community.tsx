/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "@mui/material";
import CreatePostModal from "./CreatePostModal";
import { useGetAllCommunityPostQuery } from "../../redux/api/communityApi/community.api";
import Loading from "../../components/Loading";

const Community = () => {
  const { data, isLoading } = useGetAllCommunityPostQuery(undefined);
  console.log(data);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="h-[100vh] mt-20">
      <Container>
        <section>
          <div className="flex items-center gap-5 mt-28 p-4 shadow-xl rounded-md">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </p>
            <CreatePostModal />
          </div>
        </section>

        <section className="mt-10">
          <h1 className="text-xl mb-2">All post here</h1>
          {data?.data.map((item: any) => (
            <div className="shadow p-6 rounded-md mb-3" key={item._id}>
              <h1 className="text-xl font-medium mb-3">{item.title}</h1>
              <p className="text-md">{item.description}</p>
            </div>
          ))}
        </section>
      </Container>
    </section>
  );
};

export default Community;
