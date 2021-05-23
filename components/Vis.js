import perpetratorsByGender from "../components/functions/PrepetratorsByGender";
import perpetratorMapFull from "../components/functions/perpetratorMapFull";
import ageHistogram from "../components/functions/ageHistogram";
import gunArea from "../components/functions/gunArea";
import numGunByTypes from "./functions/numGunByTypes";
import perpetratorsByTime from "./functions/perpetratorsByTime";
import gunMapFull from "./functions/gunMapFull";
import tw from "twin.macro";
import dynamic from "next/dynamic";
import { Slider, Select } from "antd";
import { useState } from "react";
import { motion } from "framer-motion";
import choices from "../components/choices";
import { useInView } from "react-intersection-observer";
const { Option } = Select;

const Section = (props) => {
  return (
    <motion.section
      tw="flex flex-col justify-center items-center"
      animate={{ x: 0, visibility: props.inView ? true : false }}
      transition={{
        ease: "easeOut",
        // , duration: 1
      }}
      initial={{ x: -4000 }}
    >
      {props.children}
    </motion.section>
  );
};

const VegaComp = dynamic(() => import("./VegaComp"), {
  ssr: false,
});

const Box = tw.div`p-4 shadow-lg rounded-lg bg-white my-6`;

const H1 = tw.h1`font-semibold font-mono text-lg`;

const Desc = tw.p`px-36`;

const Vis = () => {
  const [ageYear, setAgeYear] = useState(2018);
  const [mapYear, setMapYear] = useState(2018);
  const [mapState, setMapState] = useState("WA");
  const [feat, setFeat] = useState("mean_age");
  const { states, features } = choices;
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 2,
    triggerOnce: true,
  });

  return (
    <main tw="w-screen flex flex-col justify-center items-center gap-y-8 bg-gray-100">
      <section>
        <p tw="flex justify-center items-center flex-col text-white bg-yellow-700 h-64  w-screen">
          <span tw="text-4xl">US Gun Violence</span>
          <span>Interactive data visualizations about gun violence in US</span>
        </p>
      </section>
      <section tw="py-12 px-20">
        <h1 tw="font-mono text-xl font-bold">Introduction</h1>
        <p>
          There are a very few countries in the word where citizens have the
          right to bear arms. US is one of them where their citizens own guns
          nearly half of all civilian guns in the world. As a result, gun
          incidents are alarming in US. This project aims to study the trends of
          gun violence in US and explore any potential concerns regarding
          civilian-owned guns in US. The dataset used in this project contains
          records of gun incidents in US from January 2013 to March 2018
          provided by Gun Violence Archive. Besides the overall rate of gun
          violence over time, we aim to use geospatial mapping to see the
          distribution of gun incidents by states and counties. Using graphical
          distributions (regression and normal distribution), we will able to
          explore the demographics of gun perpetrators including age and gender
          and see any correlations they have with the damage caused. Finally, we
          will also explore which gun types are most used and most associated
          with a larger number of casualties. abstract
        </p>
      </section>
      <Section inView>
        <H1>Male and Female perpetrators over time</H1>
        <Box>
          <VegaComp func={perpetratorsByGender} name="perpetratorsByGender" />
        </Box>
        <Desc>
          Dissuade ecstatic and properly saw entirely sir why laughter endeavor.
          In on my jointure horrible margaret suitable he followed speedily.
          Indeed vanity excuse or mr lovers of on. By offer scale an stuff.
          Blush be sorry no sight. Sang lose of hour then he left find. For
          norland produce age wishing. To figure on it spring season up. Her
          provision acuteness had excellent two why intention. As called mr
          needed praise at. Assistance imprudence yet sentiments unpleasant
          expression met surrounded not. Be at talked ye though secure nearer.
        </Desc>
      </Section>
      <Section inView>
        <H1>Age distribution of perpetrators</H1>
        <Box>
          <div tw="flex gap-x-2 items-center">
            <span>year range</span>
            <Slider
              value={ageYear}
              max={2018}
              min={2013}
              tw="w-3/5"
              onChange={(v) => setAgeYear(v)}
            />
          </div>
          <VegaComp
            func={ageHistogram}
            options={{
              yearStart: ageYear,
              yearEnd: ageYear,
              color: "teal",
            }}
            name="ageHistogram"
          />
        </Box>
        <Desc>
          Dissuade ecstatic and properly saw entirely sir why laughter endeavor.
          In on my jointure horrible margaret suitable he followed speedily.
          Indeed vanity excuse or mr lovers of on. By offer scale an stuff.
          Blush be sorry no sight. Sang lose of hour then he left find. For
          norland produce age wishing. To figure on it spring season up. Her
          provision acuteness had excellent two why intention. As called mr
          needed praise at. Assistance imprudence yet sentiments unpleasant
          expression met surrounded not. Be at talked ye though secure nearer.
        </Desc>
      </Section>
      <Section>
        <Box>
          <VegaComp func={gunArea} name="gunArea" />
        </Box>
      </Section>
      <Section>
        <Box>
          <VegaComp
            func={numGunByTypes}
            name="numGunByTypes"
            options={{
              yearStart: 2013,
              yearEnd: 2018,
            }}
          />
        </Box>
      </Section>
      <Section inView>
        <H1>Percentage of gun accross US</H1>
        <Box>
          <VegaComp
            func={gunMapFull}
            name="gunMapFull"
            options={{
              gun: "Handgun",
              yearStart: 2013,
              yearEnd: 2018,
            }}
          />
        </Box>
      </Section>
      <Section inView>
        <H1>Ratio of underages over total perpretrators across US</H1>
        <Box>
          <div tw="flex gap-x-2 items-center">
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="filter by feature"
              optionFilterProp="children"
              onChange={(v) => setFeat(v)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {features.map((feat) => (
                <Option value={feat}>{feat}</Option>
              ))}
            </Select>
            <span tw="">year range</span>
            <Slider
              value={mapYear}
              max={2018}
              min={2013}
              tw="w-3/5"
              onChange={(v) => setMapYear(v)}
            />
          </div>
          <VegaComp
            func={perpetratorMapFull}
            name="perpetratorMapFull"
            options={{
              field: feat,
              yearStart: mapYear,
              yearEnd: mapYear,
            }}
          />
        </Box>
        <Desc>
          Dissuade ecstatic and properly saw entirely sir why laughter endeavor.
          In on my jointure horrible margaret suitable he followed speedily.
          Indeed vanity excuse or mr lovers of on. By offer scale an stuff.
          Blush be sorry no sight. Sang lose of hour then he left find. For
          norland produce age wishing. To figure on it spring season up. Her
          provision acuteness had excellent two why intention. As called mr
          needed praise at. Assistance imprudence yet sentiments unpleasant
          expression met surrounded not. Be at talked ye though secure nearer.
        </Desc>
        <Box>
          <div tw="flex items-center space-x-2">
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select states"
              optionFilterProp="children"
              onChange={(v) => setMapState(v)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {states.map((state) => (
                <Option value={state}>{state}</Option>
              ))}
            </Select>
          </div>
          <VegaComp
            func={perpetratorsByTime}
            name="perpetratorsByTime"
            options={{
              field: feat,
              state_abbr: mapState,
              color: "red",
            }}
          />
        </Box>
        <Desc>
          Dissuade ecstatic and properly saw entirely sir why laughter endeavor.
          In on my jointure horrible margaret suitable he followed speedily.
          Indeed vanity excuse or mr lovers of on. By offer scale an stuff.
          Blush be sorry no sight. Sang lose of hour then he left find. For
          norland produce age wishing. To figure on it spring season up. Her
          provision acuteness had excellent two why intention. As called mr
          needed praise at. Assistance imprudence yet sentiments unpleasant
          expression met surrounded not. Be at talked ye though secure nearer.
        </Desc>
      </Section>
    </main>
  );
};
export default Vis;
