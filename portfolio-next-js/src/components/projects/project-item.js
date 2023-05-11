import Image from 'next/image';
import Link from 'next/link';

export default function ProjectItem({ data }) {
  console.log(data);
  const title = data.properties.Name.title[0].plain_text;
  const github = data.properties.Github.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split('-');
    const endDateStringArray = end.split('-');

    const startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    const endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    console.log(`startDate: ${startDate}`);
    console.log(`endDate: ${endDate}`);

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24) + 1;

    console.log(`기간 : ${result}`);
    return result;
  };

  return (
    <div className="project-card">
      <Image
        src={imgSrc}
        alt="cover image"
        width="0"
        height="0"
        style={{ objectFit: 'cover' }}
        quality={100}
        alt="cover image"
        sizes="100vw"
        className="rounded-t-xl w-full h-[200px]"
      />
      <div className="flex flex-col p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="my-1 ">
          작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
        </p>
        <Link href={github}>github 바로가기</Link>
        <h3 className="mt-4 text-xl">{description}</h3>
        <div className="flex items-start mt-2">
          {tags.map((tag) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
              key={tag.id}>
              {tag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
