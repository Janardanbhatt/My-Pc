import { Loader } from 'semantic-ui-react';
import * as React from 'react';
import { observer } from 'mobx-react';

export default observer(({ thingToWaitFor }: { thingToWaitFor: string }) => (
  <Loader active size="small" style={{ marginTop: '3em' }}>
    Loading {thingToWaitFor} please wait...
  </Loader>
));
