import { GetBlogData } from "@/sanity/sanity.query";
import Link from "next/link";

export default async function Details() {
  const blogData = await GetBlogData(); 

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap justify-start mt-[70px]">
        {blogData.map((blog: any) => (
          <div key={blog.id} className="mb-52">
            
            <h2 className="text-white">{blog.name}</h2>
      <div className="h-[150px] w-full mb-2">
        {/* Display image using Image component */}
        <img src={blog.pictureURL} alt={blog.name}  height={100} width={100}/>
      </div>
      <p className="text-gray-400">{blog.description}</p>
      
            <Link href={`/blog-page/${blog.id}`}>
              <button className="underline text-white font-bold ">Page Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
