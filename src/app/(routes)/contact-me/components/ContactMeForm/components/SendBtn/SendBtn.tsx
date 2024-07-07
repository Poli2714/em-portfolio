import { Loader2Icon } from 'lucide-react';

import { Button } from '@/components/shadcn';

type SendBtnProps = {
  isPending: boolean;
};

function SendBtn({ isPending }: SendBtnProps) {
  return (
    <Button
      className='gap-x-2 place-self-start'
      disabled={isPending}
      type='submit'
    >
      {isPending ? (
        <Loader2Icon
          className='animate-spin'
          data-testid='loader-icon'
          size={20}
        />
      ) : null}
      Send
    </Button>
  );
}

export default SendBtn;
