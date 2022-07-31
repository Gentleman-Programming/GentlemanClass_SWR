import { Button } from '@mui/material';
import useSWRMutation from 'swr/mutation';

import { rickAndMortyUrl } from './services/rickAndMorty';

async function callRickAndMorty(url, { arg }) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(arg)
  });
}

export default function Characters() {
  const { data: dataFromTrigger, trigger } = useSWRMutation(rickAndMortyUrl, callRickAndMortys);

  return (
    <div>
      <Button onClick={() => trigger({ name: 'Alan' })}>Trigger</Button>
    </div>
  );
}
