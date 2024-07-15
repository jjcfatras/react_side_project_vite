import { useState } from "react";

import { countryCode, newsApi } from "@modules/news";
import { Card, Div, Dropdown, Grid } from "@modules/ui";

const App = () => {
  const [value, setValue] = useState(countryCode["US"]);
  const { data } = newsApi.useGetNewsByCountryQuery(value);

  console.log(JSON.stringify({ data }, null, "\t"));

  return (
    <Div justifyContent={"center"}>
      <Div
        _osDark={{ background: "purple" }}
        background="orange"
        marginBottom="10px"
      >
        <Dropdown<countryCode>
          formProps={{ debug: true }}
          label="Select Country Code"
          onChange={setValue}
          selectProps={{
            alignSelf: "center",
            width: "1/3",
          }}
          value={value}
        />
      </Div>
      <Grid gridTemplateColumns={[1, 2, undefined, 3]}>
        {data?.articles.map((item, index) => (
          <Card imgUrl={item.urlToImage} key={index} title={item.title} />
        ))}
      </Grid>
    </Div>
  );
};

export default App;
