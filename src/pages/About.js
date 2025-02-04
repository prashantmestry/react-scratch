import React from 'react';
import PageList from './PageList';

import MyTable from '../component/MyTable';

//
const About = () => {
  return (
    <div className="about-container">
      About
      <div>
        <PageList
          list={[
            { id: 101, name: 'Hundred One' },
            { id: 102, name: 'Hundred Two' },
          ]}
        />
        <MyTable />
      </div>
    </div>
  );
};

export default About;
