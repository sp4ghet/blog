import fs from "fs";
import path from "path";
import matter from "gray-matter";
import vfile from "vfile";
import unified from "unified";
import markdown from "remark-parse";
import math from "remark-math";
import remark2rehype from "remark-rehype";
import raw from "rehype-raw";
import remarkgfm from "remark-gfm";
import katex from "rehype-katex";
import stringify from "rehype-stringify";
import html from "remark-html";

export const blogDir = path.join(process.cwd(), "markdown/posts");
export const pageDir = path.join(process.cwd(), "markdown/pageContents");
export const worksDir = path.join(process.cwd(), "markdown/works");

export function getPostsData(postsDir: string) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDir);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData;
}

export function getSortedPostsData(postDir: string) {
  const allPostsData = getPostsData(postDir);

  // Sort posts by date
  return allPostsData.sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds(postsDir: string) {
  const fileNames = fs.readdirSync(postsDir);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id, postsDir) {
  const fullPath = path.join(postsDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await unified()
    .use(markdown)
    .use(remarkgfm)
    .use(math)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(raw)
    .use(katex)
    .use(stringify)
    .process(vfile(matterResult.content));

  const contentHtml = String(processedContent);
  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
