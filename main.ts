import blog from "https://deno.land/x/blog@0.4.2/blog.tsx";

blog({
  author: "Jacob Ranson",
  title: "Jacob Ranson",
  description: "Improvise. Adapt. Overcome.",
  avatar: "assets/avatar.jpeg",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:contact@jacobranson.com" },
    { title: "GitHub", url: "https://github.com/jacobranson" },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/jacobrileighranson/",
    },
  ],
  lang: "en",
  dateStyle: "long",
});
