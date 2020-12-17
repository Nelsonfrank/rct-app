import React from 'react';

//Components
import { Select, Checkbox, Button } from 'antd';
import ListItem from './components/list-item';
import { navigate } from '@reach/router';

// Styles
import './List.less';

export interface FilterSortProps {
  itemSelected: boolean;
  title: string;
  route: string;
}

const FilterSort = ({ itemSelected, title, route }: FilterSortProps) => {
  const requestTender = () => {
    navigate(route);
  };
  return (
    <div
      style={{
        margin: '0rem auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      <div
        style={{
          // margin: '0rem auto',
          // width: '100%',
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
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
        <Button
          disabled={itemSelected}
          danger
          onClick={requestTender}
          style={{ textTransform: 'uppercase' }}
        >
          {title}
        </Button>
      </div>
    </div>
  );
};

export interface filterResultProps {
  count: number;
}
const FilterResultCount = (props: filterResultProps) => {
  const { count } = props;
  return (
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
      <p style={{ marginBottom: 0 }}>{count}</p>
    </div>
  );
};

const { Option } = Select;

export interface ListItemProps {
  itemData: {
    id: number;
    image: string;
    ownerName: string;
    description: string;
    variety?: string;
    grade?: string;
    pickupLocation?: string;
    stock?: string;
    need?: string;
  }[];
}
export interface ListProps extends ListItemProps {
  listType?: string;
  btnTitle: string;
  routes: string;
}
const List: React.FC<ListProps> = ({
  btnTitle,
  routes,
  itemData,
}: ListProps) => {
  const [checkedItems, setCheckedItems] = React.useState<
    { ownerName: string; id: number }[]
  >([]);
  const [isAllChecked, setIsAllChecked] = React.useState(false);

  React.useEffect(() => {
    checkedItems.length == 0 ? setIsAllChecked(false) : null;
  }, [checkedItems]);

  const addAllItems = () => {
    setIsAllChecked(!isAllChecked);
    const value = itemData.map((data) => ({
      ownerName: data.ownerName,
      id: data.id,
    }));
    isAllChecked ? setCheckedItems([]) : setCheckedItems(value);
  };

  const addCheckedItem = (value: { ownerName: string; id: number }) => {
    // const values = checkedItems?.concat(value);
    const items: { ownerName: string; id: number }[] = [
      ...checkedItems,
      value,
    ].filter(
      (v, i, self) =>
        i ===
        self.findIndex(
          (item) => item.id === v.id && item.ownerName === v.ownerName,
        ),
    );

    setCheckedItems(items);
  };

  const removeCheckedItem = (id: number) => {
    const items = checkedItems?.filter((item) => item.id !== id);
    setCheckedItems(items);
  };

  return (
    <div className="list-container">
      <div style={{ margin: '1.875rem 0rem' }}>
        <FilterSort
          itemSelected={checkedItems.length <= 0}
          title={btnTitle}
          route={routes}
        />
      </div>
      <div>
        <div>
          <Checkbox
            // indeterminate={indeterminate}
            checked={isAllChecked}
            style={{ display: 'flex', margin: '1rem 0.125rem' }}
            onChange={addAllItems}
          >
            <FilterResultCount count={itemData.length} />
          </Checkbox>
          <div style={{ height: 3, width: '100%', backgroundColor: 'grey' }} />
        </div>
        {itemData.map((value) => (
          <ListItem
            key={value.id}
            id={value.id}
            image={value.image}
            ownerName={value.ownerName}
            description={value.description}
            variety={value.variety}
            pickupLocation={value.pickupLocation}
            grade={value.grade}
            stock={value.stock}
            need={value.need}
            addCheckedItem={addCheckedItem}
            removeCheckedItem={removeCheckedItem}
            isAllChecked={isAllChecked}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
