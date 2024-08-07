type MyStoryLongProps = {
  myStory: Array<string>;
};

function MyStoryLong({ myStory }: MyStoryLongProps) {
  return (
    <div className='space-y-4'>
      <h1 className='text-[clamp(2rem,5.5dvw,2.5rem)] font-bold dark:text-highlight'>
        My Story
      </h1>
      {myStory.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </div>
  );
}

export default MyStoryLong;
