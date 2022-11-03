import CardGrid from "../../components/CardGrid";

export async function getStaticProps() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
  );
  const data = await res.json();

  return {
    props: { data },
  };
}

export default function SSG({ data }) {
  return <CardGrid meals={data.meals}/>;
}
