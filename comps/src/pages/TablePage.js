import SortableTable from "../components/SortableTable";

function TablePage() {
  const keyFn = (fruit) => {
    return fruit.name;
  }

  const data = [
    {name: 'Orange', color: 'bg-orange-500', score: 5},
    {name: 'Apple', color: 'bg-red-500', score: 3},
    {name: 'Banana', color: 'bg-yellow-500', score: 1},
    {name: 'Lime', color: 'bg-green-500', score: 4}
  ];

  const config = [
    {
      label: 'Name',
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name
    },
    {
      label: 'Colors',
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>
    },
    {
      label: 'Score',
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score
    },
    {
      label: 'Score Squared',
      render: (fruit) => fruit.score * fruit.score,
      sortValue: (fruit) => fruit.score * fruit.score
    }
  ];

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  )
}

export default TablePage;
