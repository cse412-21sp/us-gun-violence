import perpetratorsByGender from "../components/functions/PrepetratorsByGender";
import perpetratorMapFull from "../components/functions/perpetratorMapFull";
import ageHistogram from "../components/functions/ageHistogram";
import ageDistribution from "./functions/ageDistribution";
import gunArea from "../components/functions/gunArea";
import numGunByTypes from "./functions/numGunByTypes";
import perpetratorsByTime from "./functions/perpetratorsByTime";
import gunMapFull from "./functions/gunMapFull";
import gunByTime from "./functions/gunByTime";
import tw from "twin.macro";
import dynamic from "next/dynamic";
import { Slider, Select } from "antd";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import choices from "../components/choices";
import { useInView } from "react-intersection-observer";
const { Option } = Select;

const Section = (props) => {
  return (
    <motion.section
      tw="flex flex-col justify-center items-center w-9/12"
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

const yearMark = Array.from(Array(2018 - 2013 + 1).keys())
  .map((k) => 2013 + k)
  .reduce(
    (acc, v) => ({
      ...acc,
      [v]: {
        style: {
          color: "#f9fafb",
        },
        label: <strong>{v}</strong>,
      },
    }),
    {}
  );

const VegaComp = dynamic(() => import("./VegaComp"), {
  ssr: false,
});

const Box = tw.div`flex flex-col p-4 justify-around items-center my-6`;

const H1 = tw.h1`font-semibold font-mono text-2xl text-gray-50`;

const Desc = tw.p`flex text-base text-gray-50 w-full p-6 text-justify`;

const Row = tw.div`flex flex-row items-center justify-around w-full`;

const Vis = () => {
  const [ageYear, setAgeYear] = useState(2018);
  const [mapYearP, setMapYearP] = useState(2018);
  const [mapYearG, setMapYearG] = useState(2018);
  const [mapStateP, setMapStateP] = useState("WA");
  const [mapStateG, setMapStateG] = useState("WA");
  const [feat, setFeat] = useState("mean_age");
  const [gun, setGun] = useState("Handgun");
  const { states, guns, features } = choices;
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 2,
    triggerOnce: true,
  });

  return (
    <main tw="flex flex-col justify-center items-center gap-y-8 bg-gray-800 w-screen">
      <section>
        <p tw="flex justify-center items-center text-lg flex-col text-white h-64  w-screen">
          <span tw="text-7xl">US Gun Violence</span>
          <span></span>
          <span tw="text-base">
            Interactive data visualizations about gun violence in US
          </span>
        </p>
      </section>
      <section tw="py-12 px-20 bg-gray-700">
        <h1 tw="font-mono text-2xl font-bold text-gray-50">Introduction</h1>
        <p tw="text-lg text-gray-50">
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
          with a larger number of casualties.
        </p>
      </section>

      <Section inView={inView}>
        <H1>Male and Female perpetrators over time</H1>
        <Row>
          <Box>
            <VegaComp func={perpetratorsByGender} name="perpetratorsByGender" />
          </Box>
        </Row>
        <Row>
          <Desc>
            Dissuade ecstatic and properly saw entirely sir why laughter
            endeavor. In on my jointure horrible margaret suitable he followed
            speedily. Indeed vanity excuse or mr lovers of on. By offer scale an
            stuff. Blush be sorry no sight. Sang lose of hour then he left find.
            For norland produce age wishing. To figure on it spring season up.
            Her provision acuteness had excellent two why intention. As called
            mr needed praise at. Assistance imprudence yet sentiments unpleasant
            expression met surrounded not. Be at talked ye though secure nearer.
          </Desc>
        </Row>
      </Section>

      <Section inView={inView}>
        <H1>Age distribution of perpetrators</H1>
        <Row>
          <VegaComp
            func={ageDistribution}
            options={useMemo(
              () => ({
                yearStart: 2014,
                yearEnd: 2018,
                color: "teal",
              }),
              [ageYear]
            )}
            name="ageDistribution"
          />
        </Row>
      </Section>

      <Section inView={inView}>
        <H1>Mean age and underage ratio of perpetrators across US</H1>
        <Box tw="w-full">
          <div tw="flex gap-x-2 justify-around items-center w-full">
            <Select
              showSearch
              style={{ width: 200, fill: "#6b7280" }}
              placeholder="select feature"
              optionFilterProp="children"
              onChange={(v) => setFeat(v)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {features.map((feat) => (
                <Option value={feat} key={feat}>
                  {feat.replaceAll("_", ` `).replaceAll("pctg", "percentage")}
                </Option>
              ))}
            </Select>
          </div>
          <VegaComp
            func={perpetratorMapFull}
            name="perpetratorMapFull"
            options={useMemo(
              () => ({
                field: feat,
                yearStart: mapYearP,
                yearEnd: mapYearP,
              }),
              [feat, mapYearP]
            )}
          />
        </Box>
        <Row>
          <Box>
            <VegaComp
              func={perpetratorsByTime}
              name="perpetratorsByTime"
              options={useMemo(
                () => ({
                  field: feat,
                  state_abbr: mapStateP,
                }),
                [feat, mapStateP]
              )}
            />
          </Box>
          <Desc>
            Dissuade ecstatic and properly saw entirely sir why laughter
            endeavor. In on my jointure horrible margaret suitable he followed
            speedily. Indeed vanity excuse or mr lovers of on. By offer scale an
            stuff. Blush be sorry no sight. Sang lose of hour then he left find.
            For norland produce age wishing. To figure on it spring season up.
            Her provision acuteness had excellent two why intention. As called
            mr needed praise at. Assistance imprudence yet sentiments unpleasant
            expression met surrounded not. Be at talked ye though secure nearer.
          </Desc>
        </Row>
      </Section>

      <Section inView={inView}>
        <H1>Number of guns used over time</H1>
        <Row>
          <Box>
            <VegaComp func={gunArea} name="gunArea" />
          </Box>
          <Desc>
            Dissuade ecstatic and properly saw entirely sir why laughter
            endeavor. In on my jointure horrible margaret suitable he followed
            speedily. Indeed vanity excuse or mr lovers of on. By offer scale an
            stuff. Blush be sorry no sight. Sang lose of hour then he left find.
            For norland produce age wishing. To figure on it spring season up.
            Her provision acuteness had excellent two why intention. As called
            mr needed praise at. Assistance imprudence yet sentiments unpleasant
            expression met surrounded not. Be at talked ye though secure nearer.
          </Desc>
        </Row>
      </Section>
      <Section inView={inView}>
        <H1>Gun counts and kill counts by types</H1>
        <Box>
          <VegaComp
            func={numGunByTypes}
            name="numGunByTypes"
            options={useMemo(() => ({
              yearStart: 2014,
              yearEnd: 2018,
            }))}
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

      <Section inView={inView}>
        <H1>Percentage of gun across US</H1>
        <Box tw="w-full">
          <div tw="flex gap-x-2 justify-around items-center w-full">
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select guns"
              optionFilterProp="children"
              onChange={(v) => setGun(v)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {guns.map((gun) => (
                <Option value={gun}>{gun}</Option>
              ))}
            </Select>
            <span tw="text-gray-50">year range</span>
          </div>
          <VegaComp
            func={gunMapFull}
            name="gunMapFull"
            options={useMemo(
              () => ({
                gun: gun,
                yearStart: mapYearG,
                yearEnd: mapYearG,
              }),
              [gun, mapYearG]
            )}
          />
        </Box>
        <Row>
          <Box>
            <VegaComp
              func={gunByTime}
              name="gunByTime"
              options={useMemo(
                () => ({
                  state_abbr: mapStateG,
                  gun: gun,
                }),
                [mapStateG, gun]
              )}
            />
          </Box>
          <Desc>
            Dissuade ecstatic and properly saw entirely sir why laughter
            endeavor. In on my jointure horrible margaret suitable he followed
            speedily. Indeed vanity excuse or mr lovers of on. By offer scale an
            stuff. Blush be sorry no sight. Sang lose of hour then he left find.
            For norland produce age wishing. To figure on it spring season up.
            Her provision acuteness had excellent two why intention. As called
            mr needed praise at. Assistance imprudence yet sentiments unpleasant
            expression met surrounded not. Be at talked ye though secure nearer.
          </Desc>
        </Row>
      </Section>
    </main>
  );
};
export default Vis;
