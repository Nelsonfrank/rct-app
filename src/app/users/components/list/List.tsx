import React from 'react';

//Components
import { Select, Checkbox } from 'antd';
import ListItem from './components/list-item';

// Styles
import './List.less';

// Placeholder Data
import { ListDAtaPlaeholder } from './ListData';

// export interface ListProps {}

const FilterSort = () => (
  <div
    style={{
      margin: '0rem auto',
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
    }}
  >
    <div style={{ margin: '0rem 0.5rem' }}>
      <div>
        <h2 style={{ fontSize: 16, marginBottom: 1 }}>Filter:</h2>
      </div>
      <Select defaultValue="TZS" style={{ width: 120 }}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="John">John</Option>
      </Select>
    </div>
    <div style={{ margin: '0rem 0.5rem' }}>
      <div>
        <h2 style={{ fontSize: 16, marginBottom: 1 }}>Sort By:</h2>
      </div>
      <Select defaultValue="non-TBS Certified" style={{ width: 120 }}>
        <Option value="TBS Certified">TBS Certified</Option>
        <Option value="non-TBS Certified">Non-TBS Certified</Option>
      </Select>
    </div>
  </div>
);

const FilterResultCount = () => (
  <div style={{ display: 'flex', marginBottom: 2, marginTop: 3 }}>
    <p
      style={{
        fontSize: '1rem',
        fontWeight: 600,
        marginBottom: 0,
        marginRight: 5,
      }}
    >
      Result:
    </p>
    <p style={{ marginBottom: 0 }}>1078</p>
  </div>
);

const { Option } = Select;

const List: React.FC = () => {
  // const [indeterminate, setIndeterminate] = React.useState(false);
  const [checkedItems, setCheckedItems] = React.useState<
    { ownerName: string; id: number }[] | undefined
  >();

  const addCheckedItem = (value: { ownerName: string; id: number }) => {
    const values = checkedItems?.concat(value);
    setCheckedItems(values);
    console.log(checkedItems);
  };

  // const removeCheckedItem = (id: number) => {
  //   const items = checkedItems?.filter((item) => item.id !== id);
  //   setCheckedItems(items);
  // };

  return (
    <div className="list-container">
      <div style={{ margin: '1.875rem 0rem' }}>
        <FilterSort />
      </div>
      <div>
        <div>
          <Checkbox
            // indeterminate={indeterminate}
            style={{ display: 'flex', margin: '1rem 0.125rem' }}
          >
            <FilterResultCount />
          </Checkbox>
          <div style={{ height: 3, width: '100%', backgroundColor: 'grey' }} />
        </div>
        {ListDAtaPlaeholder.map((value) => (
          <ListItem
            key={value.id}
            id={value.id}
            image={value.image}
            ownerName={value.ownerName}
            description={value.description}
            variety={value.variety}
            pickupLocation={value.pickupLocation}
            grade={value.grade}
            checkItem={addCheckedItem}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
