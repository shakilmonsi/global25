const FindCart = () => {
  const blogs = [
    {
      id: 1,
      title: "The Journey to React Mastery",
      description:
        "Learn how to become a React expert in 2025 with our comprehensive guide.",
      image: "assists/findcart/img2 (3).png",
      link: "#",
    },
    {
      id: 2,
      title: "Understanding Tailwind CSS",
      description:
        "Discover the power of utility-first CSS with Tailwind and boost your workflow.",
      image: "assists/findcart/img3.png",
      link: "#",
    },
    {
      id: 3,
      title: "Building Scalable Web Apps",
      description:
        "Explore tips and tricks to create scalable web apps for the future.",
      image: "assists/findcart/img1.png",
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-white">
        Latest Blogs
      </h1>

      <div className="grid gap-8 md:grid-cols-3">
        {blogs.map((blog) => (
          <div key={blog.id} className="text-center">
            {/* Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="mx-auto rounded-md mb-4"
            />
            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-900">
              {blog.title}
            </h2>
            {/* Description */}
            <p className="text-white  mt-2  ">{blog.description}</p>
            {/* Read More Link */}
            <a
              href={blog.link}
              className="text-green-500 hover:underline mt-4 inline-block"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindCart;
