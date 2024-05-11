import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import Photo from "/src/assets/landingPage/accrodian.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FrequentlyAskQues = () => {
  return (
    <Container
      sx={{
        my: 20,
      }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center  gap-8">
        <section className="w-full lg:max-w-[50%]">
          <div className="mb-6">
            <Typography variant="h4" fontWeight={600}>
              Any Questions
            </Typography>
            <Typography variant="h6" fontSize={16}>
              When deciding which charity to donate to, it's important to do
              your search and find one that aligns with your values and
              interests.
            </Typography>
          </div>
          <div>
            <Accordion
              sx={{
                border: "1px solid #f4ebef",
                boxShadow: "none",
                mb: 2,
              }}
              defaultExpanded
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>
                  How can I find reputable charities to donate to?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Researching charities before donating is crucial. Look for
                  organizations with transparent financial records, clear
                  missions, and measurable impacts. Websites like Charity
                  Navigator and GuideStar provide ratings and information on
                  charities' effectiveness and financial health.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                border: "1px solid #f4ebef",
                boxShadow: "none",
                mb: 2,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>
                  {" "}
                  What are some tax benefits of donating to charity?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Donating to registered charities can lead to tax deductions.
                  In many countries, including the United States, donations to
                  qualifying charities are deductible from taxable income,
                  reducing the amount of tax owed. Keep detailed records of
                  donations and consult with a tax professional for specific
                  guidance.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                border: "1px solid #f4ebef",
                boxShadow: "none",
                mb: 2,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>
                  How much of my donation actually goes to the cause?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Hosting events such as charity auctions, bake sales, or
                  benefit concerts can be effective ways to raise funds. You can
                  also organize online crowdfunding campaigns or participate in
                  charity walks, runs, or bike rides. Engaging your community
                  through creative and interactive fundraisers can amplify your
                  impact.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                border: "1px solid #f4ebef",
                boxShadow: "none",
                mb: 2,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>
                  Can I donate goods instead of money, and how do I do that?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes, donating goods like clothing, furniture, or food can be
                  valuable contributions to charities. Reach out to local
                  organizations to inquire about their specific needs and
                  donation guidelines. Some charities offer pick-up services for
                  large items, while others have drop-off locations for
                  donations. Make sure the items you donate are in good
                  condition and align with the charity's mission.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </section>
        <section className="hidden lg:block">
          <img className="w-[100%]" src={Photo} />
        </section>
      </div>
    </Container>
  );
};

export default FrequentlyAskQues;
