import { SquareCheckBigIcon } from 'lucide-react';

import { ProjectFeature } from '@/types/project';

type FeatureListProps = {
  features: Array<ProjectFeature>;
};

function FeatureList({ features }: FeatureListProps) {
  return (
    <div className='space-y-5'>
      {features.map((feature, i) => (
        <div
          key={i}
          className='grid grid-cols-[min-content,1fr] gap-x-4'
          data-testid='feature-item'
        >
          <SquareCheckBigIcon
            className='text-primary'
            data-testid='square-check-icon'
            size={20}
          />
          <p>
            <span className='font-bold'>{feature.name}. </span>
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FeatureList;
