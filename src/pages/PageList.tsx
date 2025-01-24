import React from "react";

type ListProps = {
  id: number;
  name: string;
};

type PageListProps = {
  list: ListProps[];
};

const PageList = (props: PageListProps) => {
  return (
    <div>
      <h3 data-testid="list-title">Page list to get help from</h3>
      <ul>
        <li>https://www.youtube.com/watch?v=ooM5A0oSbyE</li>
      </ul>
      {props.list.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};

export default PageList;
