import React from 'react';
import Blog from '../components/Blog';
import Education from '../components/Education';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import PageHead from '../components/PageHead';
import Repos from '../components/Repos';
import Summary from '../components/Summary';
import { blogFetcher } from '../hooks/blog/index';
import { repositoryFetcher } from '../hooks/repository/index';

const Index = (props) => {
  return (
    <>
      <div className='relative flex flex-col items-center p-[5px_10vw] bg-th-title-10 min-h-[400px] h-[505px]'>
        <div
          className='
            absolute
            h-[225px] 
            w-full
            bottom-0
            before:content-[""]
            before:block
            before:absolute
            before:rounded-[100%_50%]
            before:w-[55%]
            before:h-full
            before:bg-th-bg-60
            before:translate-x-[81.8%]
            before:translate-y-[65%]
            after:content-[""]
            after:block
            after:absolute
            after:rounded-[100%_50%]
            after:w-[55%]
            after:h-full
            after:bg-th-title-10
            after:translate-x-[-4%]
            after:translate-y-[40%]
            after:-z-[1]
          '
        />
        <div className='container mx-auto relative z-10'>
          <PageHead />
          <Nav />
          <Hero />
          <Summary />
          <Education />
          <Repos repos={props.repos} />
          <Blog posts={props.blog} />
          <Footer currentYear={props.currentYear} />
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const repos = await getReposData();
  const blog = await getBlogData();

  return {
    props: {
      currentYear: new Date().getFullYear(),
      repos,
      blog,
    },
    revalidate: 60,
  };
}

export async function getReposData() {
  const data = await repositoryFetcher(
    'https://api.github.com/users/jvidaln/repos'
  );

  const result = data.map(async (repo) => {
    let languages = Object.keys(await repositoryFetcher(repo.languages_url));
    let topics = (await repositoryFetcher(`${repo.url}/topics`)).names;

    if (topics.some((t) => t === 'portfolio')) {
      return {
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        languages,
      };
    }
  });

  const filteredRepos = (await Promise.all(result)).filter((repo) => !!repo);

  return filteredRepos;
}

export async function getBlogData() {
  const data = await blogFetcher(
    'https://dev.to/api/articles?username=jvidaln'
  );

  const result = data.map((post) => {
    return {
      id: post.id,
      title: post.title,
      url: post.url,
      description: post.description,
      cover_image: post.cover_image,
      published_at: post.published_at,
      tags: post.tags,
      reading_time_minutes: post.reading_time_minutes,
    };
  });

  return result;
}

export default Index;
