import type { Chai } from "../types";
import ChaiCard from "./ChaiCard";

interface ChaiListProps {
  items: Chai[];
}

const ChaiList = ({ items }: ChaiListProps) => {
  return (
    <div>
      {items.map((chai, index) => (
        <ChaiCard
          key={index}
          name={chai.name}
          price={chai.price}
          isSpecial={chai.price > 30 ? true : false}
        />
      ))}
    </div>
  );
};

export default ChaiList;
