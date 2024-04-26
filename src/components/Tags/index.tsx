interface TagsProp {
  tag: string;
  tagIndex: number;
}

const Tags = ({ tag }: TagsProp) => {
  const handleTagEdit = () => {};
  const contentEditOption = () => {};
  const handleTagDelete = () => {};
  return (
    <div className="relative p-2 mt-2 mr-2 px-5 bg-white rounded-full inline-block hover:bg-opacity-50 pr-10">
      <p
        className="outline-none"
        onKeyDown={handleTagEdit}
        onClick={contentEditOption}
      >
        {tag}
      </p>
      <button
        className="mt-[2px] rounded-full absolute right-3 top-1/2 -translate-y-1/2"
        onClick={handleTagDelete}
      >
        <i className="fi fi-br-cross text-sm pointer-events-none"></i>
      </button>
    </div>
  );
};

export default Tags;