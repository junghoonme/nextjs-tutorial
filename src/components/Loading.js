import { Loader } from 'semantic-ui-react';

export default function Loading() {
  return (
    <div style={{ padding: '300px 0' }}>
      <Loader inline='centered' active>
        Loading
      </Loader>
    </div>
  );
}
