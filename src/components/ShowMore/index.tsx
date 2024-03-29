import { useSearchParams } from "react-router-dom";
import Button from "../Button";

const ShowMore = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let limit = Number(searchParams.get("limit")) || 10;

  const handleLimit = () => {
    limit += 10;
    searchParams.set("limit", String(limit));
    setSearchParams(searchParams);
  };

  return (
    <div className="my-10">
      {limit < 30 && <Button onClick={handleLimit} title="Show More" />}
    </div>
  );
};

export default ShowMore;
