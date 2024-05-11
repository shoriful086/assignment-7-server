import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";
import { Container, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-gray-800 lg:p-20 py-10  bottom-0 w-full ">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white lg:h-[30vh]">
          <div>
            <Typography variant="h6" mb={2}>
              Explore Links
            </Typography>
            <div className="flex flex-col gap-3 text-gray-400">
              <Link to="/">About Company</Link>
              <Link to="/">Latest Projects</Link>
              <Link to="/">Latest Blog</Link>
              <Link to="/">Our Testimonials</Link>
              <Link to="/">Our Mission</Link>
            </div>
          </div>
          <div>
            <div>
              <Typography variant="h6" mb={2}>
                Get Support
              </Typography>
              <div className="flex flex-col gap-3 text-gray-400">
                <Link to="/">About</Link>
                <Link to="/">How it Works</Link>
                <Link to="/">Knowledge Hub</Link>
                <Link to="/">Success Stories</Link>
                <Link to="/">Contact</Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Typography variant="h6" mb={2}>
                Get Contact
              </Typography>
              <div className="flex flex-col gap-3 text-gray-400">
                <Link to="/">Email: donation@gmail.com</Link>
                <Link to="/">Phone: (+88) 111-222-333</Link>
                <Link to="/">Location: Tropical Cyclone, Volcano</Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Divider
            sx={{
              my: 2,
              border: 1,
              color: "#303335",
            }}
          />
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div>
              <Typography variant="h6" fontSize={16} color="#798187">
                Copyright © 2024 PH Limited. All rights reserved.
              </Typography>
            </div>
            <div className="flex justify-between  gap-4 mt-3 text-white">
              <FacebookOutlined
                sx={{
                  width: "50px",
                  height: "30px",
                  backgroundColor: "#798187",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              />
              <YouTube
                sx={{
                  width: "50px",
                  height: "30px",
                  backgroundColor: "#798187",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              />
              <Instagram
                sx={{
                  width: "50px",
                  height: "30px",
                  backgroundColor: "#798187",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              />
              <LinkedIn
                sx={{
                  width: "50px",
                  height: "30px",
                  backgroundColor: "#798187",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
