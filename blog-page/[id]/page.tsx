import { GetBlogData } from "@/sanity/sanity.query";

export default async function BlogDetails({ params }: { params: { id: string } }) {
  const blogData = await GetBlogData();  // Fetch the data from Sanity

  const blog = blogData.find((b: any) => String(b.id) === params.id);


  return blog ? (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{blog.name}</h1>
      <img className="my-4" src={blog.pictureURL} alt={blog.name} />
      <p>{blog.description}</p>
    </div>
  ) : (
    <p>Blog not found. Please check the URL or try another blog.</p>
  );
}
