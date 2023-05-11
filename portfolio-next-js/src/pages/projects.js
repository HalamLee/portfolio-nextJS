import Layout from '@/components/layout/layout';
import Head from 'next/head';
import { TOKEN, DATABASE_ID } from '../../config';
import ProjectItem from '@/components/projects/project-item';

export default function Projects({ projects }) {
  return (
    <Layout>
      <Head>
        <title>Lami's portfolio</title>
        <meta name="description" content="Lami's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex flex-col items-center justify-center mb-8 text-gray-600 body-font">
        {/* <div className="container flex flex-col items-center px-5 mx-auto md:flex-row"></div> */}
        <div className="grid w-[calc(100%-100px)] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {projects.results.map((project) => (
            <ProjectItem key={project.id} data={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: 'Name',
          direction: 'ascending',
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  const projectNames = projects.results.map(
    (project) => project.properties.Name.title[0].plain_text
  );

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
