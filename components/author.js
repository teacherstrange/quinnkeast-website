import DateFormatter from "./date-formatter";

export default function Author({ author, date }) {
  return (
    <div className="flex flex-row items-center mt-4">
      <div className="flex items-center">
        <img
          src={author.picture}
          className="w-14 h-14 rounded-full mr-3"
          alt={author.name}
        />
      </div>
      <div className="text-sm leading-tight">
        {author.name}
        <br />
        <span className="text-black-lighter">
          <DateFormatter dateString={date} />
        </span>
      </div>
    </div>
  );
}
