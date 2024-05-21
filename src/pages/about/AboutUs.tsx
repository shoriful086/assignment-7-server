/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Typography } from "@mui/material";
import { useGetAllVolunteersQuery } from "../../redux/api/volunteerApi/volunteer.api";
import Loading from "../../components/Loading";

const AboutUs = () => {
  const { data, isLoading } = useGetAllVolunteersQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="h-[100%]  mt-20 ">
      <section>
        <div className="relative">
          <img
            className="w-full h-80 z-10"
            src="https://static.vecteezy.com/system/resources/previews/000/381/988/original/vector-abstract-colorful-dotted-banner-background.jpg"
            alt=""
          />
        </div>
      </section>
      <Container>
        <section className="">
          <Typography fontSize={32} fontWeight={600} py={4}>
            Our Volunteer
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5  rounded-md mb-10">
            {data?.data.map((item: any) => (
              <div key={item._id}>
                <div className="shadow-xl p-4 bg-white rounded-md">
                  <img
                    className="w-full h-96 rounded"
                    src={item.profile}
                    alt=""
                  />
                  <h1 className="text-white text-2xl mt-4 text-yellow-500">
                    {item.name}
                  </h1>
                  <p className=" text-xl">{item.address}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </section>
  );
};

export default AboutUs;
