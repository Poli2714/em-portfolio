import { DotIcon } from 'lucide-react';

import { TSolutionDetail } from '@/types/project';

type SolutionDetailListProps = {
  solutionDetails: Array<TSolutionDetail>;
};

function SolutionDetailList({ solutionDetails }: SolutionDetailListProps) {
  return (
    <ul className='pl-4'>
      {solutionDetails.map((detail) => (
        <li key={detail.id}>
          <p className='flex items-center gap-x-2'>
            <DotIcon className='h-6 w-6 min-w-6' />
            {detail.item}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default SolutionDetailList;
