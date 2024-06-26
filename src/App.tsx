import { useState } from "react";

import { countryCode, newsApi } from "@modules/news";
import { Card, Div, Dropdown, Grid } from "@modules/ui";

const App = () => {
  const [value, setValue] = useState(countryCode["US"]);
  const { data } = newsApi.useGetNewsByCountryQuery(value);

  console.log(JSON.stringify({ data }, null, "\t"));

  return (
    <Div>
      <Div
        marginBottom="10px"
        background="orange"
        display="flex"
        justifyContent="center"
        _osDark={{ background: "purple" }}
      >
        <Dropdown<countryCode>
          value={value}
          onChange={setValue}
          label="Select Country Code"
        />
      </Div>
      <Grid gridTemplateColumns={[1, 2, undefined, 3]}>
        {data?.articles.map((item, index) => (
          <Card key={index} title={item.title} />
        ))}
      </Grid>
    </Div>
  );
};

export default App;
