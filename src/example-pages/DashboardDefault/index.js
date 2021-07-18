import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import DashboardDefaultSection1 from '../../example-components/DashboardDefault/DashboardDefaultSection1';

export default function DashboardDefault() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Relatórios"
        titleDescription="Relatório desbravador."
      />

      <DashboardDefaultSection1 />
      {/* <DashboardDefaultSection2 />
      <DashboardDefaultSection3 />
      <DashboardDefaultSection4 />
      <DashboardDefaultSection5 />
      <DashboardDefaultSection6 />
      <DashboardDefaultSection7 />
      <DashboardDefaultSection8 /> */}
    </Fragment>
  );
}
