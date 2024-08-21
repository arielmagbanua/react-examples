import Table from "./Table";
import {useState} from "react";
import {GoArrowDown, GoArrowUp} from "react-icons/go";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const {config, data} = props;

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  }

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => <th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(column.label)}>
        <div className="flex items-center">
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </div>
      </th>
    }
  });

  // only sort data if sortOrder and sortBy are not null
  // make a copy of data prop
  // find the correct value sortValue function and use it for sorting
  let sortedData = data;
  if (sortOrder && sortBy) {
    const {sortValue} = config.find((column) => column.label === sortBy);

    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
      }

      return (valueA - valueB) * reverseOrder;
    });
  }

  return <Table {...props} config={updatedConfig} data={sortedData}/>
}

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    // show both up and down icons
    return (
      <div>
        <GoArrowUp/>
        <GoArrowDown/>
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoArrowUp/>
        <GoArrowDown/>
      </div>
    );
  }

  if (sortOrder === 'asc') {
    // show up icon
    return (
      <div>
        <GoArrowUp/>
      </div>
    );
  }

  if (sortOrder === 'desc') {
    // show down icon
    return (
      <div>
        <GoArrowDown/>
      </div>
    );
  }
}

export default SortableTable;
