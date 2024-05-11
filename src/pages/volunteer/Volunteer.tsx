import {
  Button,
  Container,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useCreateVolunteerMutation } from "../../redux/api/volunteerApi/volunteer.api";
import toast from "react-hot-toast";

const Volunteer = () => {
  const { register, handleSubmit } = useForm();
  const [experience, setExperience] = useState("");
  const [createVolunteer] = useCreateVolunteerMutation();

  const handleChange = (event: SelectChangeEvent) => {
    setExperience(event.target.value);
  };

  const onSubmit = async (data: FieldValues) => {
    const volunteerDat = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      profile: data.profile,
      address: data.address,
      emergencyInfo: {
        name: data.emergency.name,
        email: data.emergency.email,
        phone: data.emergency.phone,
      },
      experience: experience,
    };
    const res = await createVolunteer(volunteerDat).unwrap();

    if (res) {
      toast.success(res.message);
    }
  };

  return (
    <Container>
      <section className="mt-20">
        <div className="w-full  lg:w-[30%] flex mx-auto text-xl font-medium ">
          <h1 className="mt-10  lg:rounded-full lg:p-2 mb-4">
            Virtual Volunteer Registration
          </h1>
        </div>
        <form
          className="w-full lg:w-[70%] mx-auto mb-10 shadow p-8 border-1 border-gray-500 rounded-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* *****Basic Information ******* */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="font-medium">Name*</label>
              <input
                className="border border-gray-300  p-2 my-2 mb-3 rounded"
                type="text"
                id="name"
                {...register("name", { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium">Phone*</label>
              <input
                className="border border-gray-300  p-2 my-2 mb-3 rounded"
                type="number"
                id="phone"
                placeholder="01900000000"
                {...register("phone", { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium">Email*</label>
              <input
                className="border border-gray-300  p-2 my-2 mb-3 rounded"
                type="email"
                id="email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium">Profile*</label>
              <input
                className="border border-gray-300  p-2 my-2 mb-3 rounded"
                type="text"
                id="profile"
                {...register("profile", { required: true })}
              />
            </div>
          </div>

          {/********Address Information *******/}

          <div className="flex flex-col">
            <label className="font-medium">Address*</label>
            <input
              className="border border-gray-300  p-2 my-2 mb-3 rounded"
              type="address"
              id="address"
              {...register("address", { required: true })}
            />
          </div>

          {/********Emergency Contact Information *******/}

          <h1 className="font-medium text-xl mb-4 mt-6">
            Emergency Contact Information
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="font-medium">Emergency Contact Name*</label>
              <input
                className="border border-gray-300  p-2 my-2 mb-3 rounded"
                type="text"
                id="emergency.name"
                {...register("emergency.name", { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium">Emergency Contact Phone *</label>
              <input
                className="border border-gray-300  p-2 my-2 mb-3 rounded"
                type="text"
                placeholder="01900000000"
                id="emergency.phone"
                {...register("emergency.phone", { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium">Emergency Contact Email*</label>
              <input
                className="border border-gray-300  p-2 my-2 mb-3 rounded"
                type="text"
                id="emergency.email"
                {...register("emergency.email", { required: true })}
              />
            </div>
          </div>

          <h1 className="font-medium text-xl mb-4 mt-6">Experience</h1>

          <div className="flex flex-col">
            <label className="font-medium mb-2">Your Experience*</label>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              sx={{
                mb: 4,
              }}
              value={experience}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem selected value={2}>
                2
              </MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </div>

          <div className="flex justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </section>
    </Container>
  );
};

export default Volunteer;
