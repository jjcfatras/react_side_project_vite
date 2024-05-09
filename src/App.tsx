import { useState } from "react";

import { css } from "../styled-system/css";
import { countryCode, type IArticle, newsApi } from "./modules/news";

function App() {
  const [value, setValue] = useState<string>("us");
  const { data } = newsApi.useGetNewsByCountryQuery(value);

  console.log(JSON.stringify({ data }, null, "\t"));

  const Card = ({ title }: { title: IArticle["title"] }) => (
    <div
      className={css({
        aspectRatio: "landscape",
        borderColor: { base: "red", _hover: "blue" },
        borderWidth: "thin",
        width: "300px",
        borderRadius: "md",
        placeSelf: "center",
      })}
    >
      <text className={css({ fontSize: "s", fontWeight: "bold" })}>
        {title}
      </text>
    </div>
  );

  const DropDown = () => (
    <form className={css({ display: "flex", flexDirection: "column" })}>
      <label>Select Country Code</label>
      <select
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        {Object.keys(countryCode).map((code) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>
    </form>
  );

  return (
    <div>
      <div
        className={css({
          mb: "10px",
          bg: "orange",
          display: "flex",
          justifyContent: "center",
        })}
      >
        <DropDown />
      </div>
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: "3",
          gap: "10px",
        })}
      >
        {data?.articles.map((item, index) => (
          <Card key={index} title={item.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
