import React from 'react';

//Components
import Card from '../../../../../components/card';

//Style
import './RecentTender.less';
export interface RecentTendersProps {
  tenderItem: {
    id: number;
    tenderImg: string;
    title: string;
    descript: string;
  }[];
}

const RecentWork: React.FC<RecentTendersProps> = (
  props: RecentTendersProps,
) => {
  const { tenderItem } = props;
  return (
    <div>
      <div>
        <h2>Recent Tender</h2>
        <div className="sells-lists">
          {tenderItem.map((item) => (
            <Card
              key={item.id}
              className="card-sells_container"
              img={item.tenderImg}
              imgTitle={item.title}
              imgDescrip={item.descript}
            ></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
