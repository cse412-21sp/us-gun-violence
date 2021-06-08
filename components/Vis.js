import perpetratorsByGender from "../components/functions/PrepetratorsByGender";
import perpetratorMapFull from "../components/functions/perpetratorMapFull";
import ageDistribution from "./functions/ageDistribution";
import gunArea from "../components/functions/gunArea";
import numGunByTypes from "./functions/numGunByTypes";
import gunMapFull from "./functions/gunMapFull";
import wordCloud from "./functions/wordCloud";
import tweetmapWA from "./functions/tweetmapWA";
import tweetmapNY from "./functions/tweetmapNY";
import tw from "twin.macro";
import dynamic from "next/dynamic";
import { Input, Select } from "antd";
import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import choices from "../components/choices";
import { useInView } from "react-intersection-observer";
import VegaEmbeded from "../components/vegaEmbeded";
const { Option } = Select;
const { Search } = Input;

const variants = {
  visible: { opacity: 1, scale: 1 },
  hidden: {
    opacity: 0,
  },
};

const Section = (props) => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: false,
  });
  return (
    <motion.section
      tw="flex flex-col justify-center items-center w-9/12"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      ref={ref}
      transition={{ duration: 0.2, ease: "easeIn" }}
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

const Desc = tw.p`text-base text-gray-50 w-full p-6 text-justify`;

const Cap = tw.p`flex text-base italic text-yellow-200 w-full p-6 text-justify`;

const Row = tw.div`flex flex-row items-center justify-around w-full`;

const Vis = () => {
  const [ageYear, setAgeYear] = useState(2018);
  const [mapYearP, setMapYearP] = useState(2018);
  const [mapYearG, setMapYearG] = useState(2018);
  const [mapStateP, setMapStateP] = useState("WA");
  const [mapStateG, setMapStateG] = useState("WA");
  const [wordwordCloud, setWordWordCloud] = useState("gun");
  const [wcLoading, setWCLoading] = useState(true);
  const [feat, setFeat] = useState("underages_ratio");
  const [gun, setGun] = useState("Handgun");
  const { guns, features } = choices;
  const [dataWord, setData] = useState([
    { text: "loading", value: 100, weight: 200 },
  ]);
  useEffect(() => {
    setWCLoading(true);
    fetch(
      "https://advise-pressing-dolls-suit.trycloudflare.com/api/getWordCloud",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ keyword: wordwordCloud }),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setWCLoading(false);
        console.log("response: ", response);
        setData(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [wordwordCloud]);
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
          provided by Gun Violence Archive. We aim to explore the patterns lie
          in the demographics of gun perpetrators including age and gender.
          Moreover, we also want to use a geospatial map to address gun control
          problems by states. Finally, we will also explore which gun types are
          most used and most associated with hihger lethality.
        </p>
      </section>

      <Section>
        <H1>Male and Female perpetrators over time</H1>
        <Row>
          <Desc>
            To understand the characteristics and patterns of gun perpetrators
            across the years, we first plotted a stacked area plot of the number
            and proportion of perpetrators of the two genders from 2014 to 2018.
          </Desc>
        </Row>
        <Row>
          <VegaComp func={perpetratorsByGender} name="perpetratorsByGender" />
        </Row>
        <Cap>Drag over the area chart to select a smaller time frame.</Cap>
        <Row>
          <Desc>
            Overall, the total number of gun violence incidents did not change
            very much in 5 years. The number of perpetrators from April 2014 to
            October 2014 was relatively higher. From the percentage graph, we
            can see that male perpetrators are accounted for a much greater
            portion compared to female perpetrators at about 10 times higher.
          </Desc>
        </Row>
      </Section>

      <Section>
        <H1>Age distribution of perpetrators</H1>
        <Row>
          <Box>
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
          </Box>
        </Row>
        <Cap>Click on a boxplot to display the distribution accordingly.</Cap>
        <Row>
          <Desc>
            Besides the genders, the next important feature of perpetrators to
            observe is age. The boxplots show how the ages of perpetrators were
            distributed in each year. The distribution of ages stayed mostly the
            same throughout the years as mean and median ages of perpetrators
            did not vary much. The higher mean than the median indicates that
            the distribution skews left towards younger ages. The number of
            perpetrators is highest between the ages of 20 - 25. The
            distribution of each looked pretty much the same except for 2018,
            because the data is only available for the early months.
          </Desc>
        </Row>
      </Section>

      <Section>
        <H1>Underage ratio and mean age of perpetrators across US</H1>
        <Row>
          <Desc>
            Young perpetrators, especially underage ones, are a big concern
            considering guns falling into young people’s hands. Here, we want to
            see the number of underage perpetrators in different states and see
            which states in particular have gun control problems to address. As
            a result, we plotted a geospatial map showing the number of underage
            perpetrators in each US state.
          </Desc>
        </Row>
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
        <Cap>Click to highlight a state.</Cap>
        <Row>
          <Desc>
            From the map, a pattern is recognizable: the south-eastern states
            tend to have higher percentages of underage perpetrators. South
            eastern states also had higher numbers of perpetrators per
            population.
          </Desc>
        </Row>
        <Row>
          <Desc>
            In the next section, we will explore the gun types used in gun
            violence incidents, to analyze their distributions and lethality.
          </Desc>
        </Row>
      </Section>

      <Section>
        <H1>Number of guns used over time</H1>
        <Row>
          <Box>
            <VegaComp func={gunArea} name="gunArea" />
          </Box>
        </Row>
        <Cap>
          Click on the legend to highlight specific gun types to compare or drag
          over the area chart to explore a smaller time frame.
        </Cap>
        <Row>
          <Desc>
            Our next part includes finding insights from different gun types
            used in gun incidents. By plotting a number and percentage of each
            gun type over time, we could see which types of guns are most
            commonly used by the perpetrators. The stacked area plot on the left
            had a huge gap in November 2014, it was caused by missing data. From
            two graphs, we could see that handguns are used most often among all
            gun types and the percentage of handguns increased rapidly in 2015.
            Other frequently used gun types included 9mm, rifle and shotgun.
          </Desc>
        </Row>
      </Section>
      <Section>
        <H1>Percentage of guns used and lethality</H1>
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
        <Cap>Click a bar to highlight a specific gun type.</Cap>
        <Desc>
          This visualization has an all-year summary of how frequent each type
          of gun was used. The trend is similar to what we saw in the previous
          visualization. However, the lethality of each type of gun (specified
          by the ratio of total kill count over the total number of victims)
          varies differently. We can see how handguns as the most common ones
          are not that lethal compared to long rifles while shotguns tend to be
          the least lethal.
        </Desc>
      </Section>
      <Section>
        <H1>Percentage of each gun type across US</H1>
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
        <Cap>Click to highlight a state.</Cap>
        <Row>
          <Desc>
            Next, we plotted a geospatial map of the US showing how frequent
            each type of gun is used in each state to see any patterns.
            Generally, west states had higher rates of guns used. Following the
            lethality plot in the previous visualization, we can point out
            states that have more highly lethal gun types. For example, we could
            see Alaska having the most frequent use of a 12 gauge gun which is
            gun with almost 0.5 lethality. Using the given information we could
            infer high risk states to a specific gun type and future trends of
            gun usage specific to areas.
          </Desc>
        </Row>
        <Row>
          <Desc>
            In conclusion, these visualizations will be useful for authorities
            of different states to figure out gun control problems that should
            be further investigated. This includes highly lethal guns and
            underage perpetrators. For instance, by knowing the gun types
            distributed geographically in the US we could know which gun types
            are commonly used by perpetrators in different areas so the
            authorities can investigate and enforce proper gun controls specific
            to a different area. We hope these visualizations will be useful for
            those who want to learn the overall picture of gun violence in US
            and those who want to do further research on gun violence.
          </Desc>
        </Row>
      </Section>
      <Section>
        <H1>
          Extra: Sentimentality Analysis of Tweets about Gun Violence in US.
        </H1>
        <Desc>
          In addition to gun violence data retrieved from Gun Violence Archive,
          we have pulled data of tweets about gun incidents from Twitter API as
          an experiment. Next, we performed sentimentality analysis which
          evaluates negativity and positivity of language used in each tweet.
          For the sentimentality analysis we used the library{" "}
          <span>
            <a tw="underline" href="https://nltk.org">
              NLTK (Natural Language Toolkit)
            </a>
          </span>
          with the model
          <span>
            <a tw="underline" href="https://github.com/cjhutto/vaderSentiment">
              Vader
            </a>
          </span>
          <span>
            <a
              tw="underline"
              href="http://comp.social.gatech.edu/papers/icwsm14.vader.hutto.pdf"
            >
              (Link to the paper)
            </a>
          </span>
          implemented. This part of visualizations is only intended to be an
          experiment. We want to see possibility of visualizations we can create
          out of the sentimentality analysis we have performed.
        </Desc>
        <Desc>
          For the first visualization, we created a word cloud that dynamically
          pulls real-time tweets data according to the word input. The words
          displayed are the top words contained in the tweets that are
          associated with the input word. The blue, orange and red colors
          incicate a positive, neutral and negative word respectively according
          to the model. We also filter out stock words (articles, pronouns etc.)
          prior to this visualization.
        </Desc>
        <Search
          placeholder={wordwordCloud}
          loading={wcLoading}
          onSearch={(value) => {
            setWordWordCloud(value);
          }}
        />
        <VegaEmbeded
          func={wordCloud}
          name="wordCloud"
          options={useMemo(
            () => ({
              dataWord: dataWord,
            }),
            [dataWord]
          )}
        />
        <Desc>
          Here is the word cloud of 1000 most recent tweet from Twitter related
          to keyword: <span>{wordwordCloud}</span>
        </Desc>
      </Section>
      <Section>
        <Desc>
          With the position and time of each gun incident from the previous
          dataset we have, we were able to scope down and scrape tweets around
          the same location and time (7 days before and after the incident) as the gun incident. For this
          visualization, we scope down only to some major states in US: New York and Washington. We plot
          the location of each gun incident on each state map.
          The blue, orange and red colors indicate sentimentality of tweets
          around the same time and location of each gun incident.
        </Desc>
        <Desc>
          Washington State:
        </Desc>
        <VegaComp func={tweetmapWA} name="tweetmapWA" />
        <Desc>
          New York State:
        </Desc>
        <VegaComp func={tweetmapNY} name="tweetmapNY" />
      </Section>
      <section tw="py-12 px-20 bg-gray-700 w-full">
        <h1 tw="font-mono text-2xl font-bold text-gray-50">Data Used</h1>
        <ul tw="text-lg text-gray-50">
          <li>
            <a href="https://www.kaggle.com/jameslko/gun-violence-data">
              Gun Violence Data from Kaggle
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};
export default Vis;
