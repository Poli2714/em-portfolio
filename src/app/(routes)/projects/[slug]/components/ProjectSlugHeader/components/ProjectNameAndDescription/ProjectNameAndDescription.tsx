type ProjectNameAndDescriptionProps = {
  description: string;
  name: string;
};

function ProjectNameAndDescription({
  description,
  name,
}: ProjectNameAndDescriptionProps) {
  return (
    <>
      <h1 className='text-[clamp(2.5rem,5dvw,3.5rem)] font-bold dark:text-highlight'>
        {name}
      </h1>
      <p className='text-lg'>{description}</p>
    </>
  );
}

export default ProjectNameAndDescription;
