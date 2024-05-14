import axios from "axios";
import { useQuery } from "react-query";

export default function ProductHeroPage() {
  const { isLoading, data, error } = useQuery("hero-data", () => {
    return axios.get("http://localhost:4000/superhero");
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  console.log(data);

  return (
    <div style={{ float: "left" }}>
      {/* Render your superhero data here */}
      {data && (
        <div>
          <h2>{data.data.name}</h2>
          <p>{data.data.description}</p>
        </div>
      )}
    </div>
  );
}
