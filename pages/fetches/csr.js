import { useEffect, useState } from "react";
import CardGrid from "../../components/CardGrid";

export default function CSR() {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
      );
      setData(await res.json())
    }
    getData()
  });

  return data && <CardGrid meals={data.meals} />
}
