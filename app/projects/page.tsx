import React from "react";
import PublicationCard from "./PublicationCard";


const Projects = () => {
  const data = [
    {
      title: "A newborn embodied Turing test for view-invariant object recognition",
      date: "23 June 2024",
      description:
        "The paper discusses the results of a study which explored advanced learners of English engagement with their mobile devices to develop learning experiences that meet their needs and goals as foreign language learners. The data were collected from 20 students by means of a semi-structured interview. The gathered data were subjected to qualitative and quantitative analysis. The results of the study demonstrated that, on the one hand, some subjects manifested heightened awareness relating to the advantageous role of mobile devices in their learning endeavors, their ability to reach for suitable tools and retrieve necessary information so as to achieve their goals, meet their needs and adjust their learning of English to their personal learning styles, and on the other, a rather intuitive and/or ad hoc use of their mobile devices in the classroom.",
      authors: "Denizhan Pak, Donsuk Lee, Samantha M. W. Wood, Justin N. Wood",
      link: "https://static1.squarespace.com/static/639b62c102544464637767b3/t/64ebbb26b3066e7133d44c91/1693170471570/Pak%2C+Wood+%26+Wood+%282023%29.pdf",
    },
    {
      title: "Parallel development of social preferences in fish and machines",
      date: "23 June 2024",
      description:
        "The paper discusses the results of a study which explored advanced learners of English engagement with their mobile devices to develop learning experiences that meet their needs and goals as foreign language learners. The data were collected from 20 students by means of a semi-structured interview. The gathered data were subjected to qualitative and quantitative analysis. The results of the study demonstrated that, on the one hand, some subjects manifested heightened awareness relating to the advantageous role of mobile devices in their learning endeavors, their ability to reach for suitable tools and retrieve necessary information so as to achieve their goals, meet their needs and adjust their learning of English to their personal learning styles, and on the other, a rather intuitive and/or ad hoc use of their mobile devices in the classroom.",
      authors: "Joshua D. McGraw, Donsuk Lee, Justin N. Wood",
      link: "https://static1.squarespace.com/static/639b62c102544464637767b3/t/64ebbb55f82f48206b56a8e2/1693170517832/McGraw%2C+Lee+%26+Wood+%282023%29.pdf",
    },
    {
      title: "The development of object recognition requires experience with the surface features of objects",
      date: "23 June 2023",
      description:
        "The paper discusses the results of a study which explored advanced learners of English engagement with their mobile devices to develop learning experiences that meet their needs and goals as foreign language learners. The data were collected from 20 students by means of a semi-structured interview. The gathered data were subjected to qualitative and quantitative analysis. The results of the study demonstrated that, on the one hand, some subjects manifested heightened awareness relating to the advantageous role of mobile devices in their learning endeavors, their ability to reach for suitable tools and retrieve necessary information so as to achieve their goals, meet their needs and adjust their learning of English to their personal learning styles, and on the other, a rather intuitive and/or ad hoc use of their mobile devices in the classroom.",
      authors: "Denizhan Pak, Donsuk Lee, Samantha M. W. Wood, Justin N. Wood",
      link: "https://static1.squarespace.com/static/639b62c102544464637767b3/t/64ebbb7a80398d659c60b81c/1693170556746/Wood+%26+Wood+%282022%29.pdf",
    },
    {
      title: "Project Title 4",
      date: "23 June 2023",
      description:
        "The paper discusses the results of a study which explored advanced learners of English engagement with their mobile devices to develop learning experiences that meet their needs and goals as foreign language learners. The data were collected from 20 students by means of a semi-structured interview. The gathered data were subjected to qualitative and quantitative analysis. The results of the study demonstrated that, on the one hand, some subjects manifested heightened awareness relating to the advantageous role of mobile devices in their learning endeavors, their ability to reach for suitable tools and retrieve necessary information so as to achieve their goals, meet their needs and adjust their learning of English to their personal learning styles, and on the other, a rather intuitive and/or ad hoc use of their mobile devices in the classroom.",
      authors: "Samantha M. W. Wood, Justin N. Wood",
      link: "https://static1.squarespace.com/static/639b62c102544464637767b3/t/64ebbb26b3066e7133d44c91/1693170471570/Pak%2C+Wood+%26+Wood+%282023%29.pdf",
    },
    {
      title: "Project Title 5",
      date: "23 June 2023",
      description:
        "The paper discusses the results of a study which explored advanced learners of English engagement with their mobile devices to develop learning experiences that meet their needs and goals as foreign language learners. The data were collected from 20 students by means of a semi-structured interview. The gathered data were subjected to qualitative and quantitative analysis. The results of the study demonstrated that, on the one hand, some subjects manifested heightened awareness relating to the advantageous role of mobile devices in their learning endeavors, their ability to reach for suitable tools and retrieve necessary information so as to achieve their goals, meet their needs and adjust their learning of English to their personal learning styles, and on the other, a rather intuitive and/or ad hoc use of their mobile devices in the classroom.",
      authors: "Authors",
      link: "https://static1.squarespace.com/static/639b62c102544464637767b3/t/64ebbb26b3066e7133d44c91/1693170471570/Pak%2C+Wood+%26+Wood+%282023%29.pdf",
    },
  ];
  return (
    <main className="p-3">
      <h1 className="text-4xl font-bold drop-shadow-lg text-black text-center my-5 mx-auto dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert">
        Ongoing Research and Publication
      </h1>
      <div className="grid lg:grid-cols-2 gap-20 p-5 mx-5">
        {data.map((item) => (
          <PublicationCard
            key={item.title}
            title={item.title}
            date={item.date}
            description={item.description}
            authors={item.authors}
            link={item.link}
          />
        ))}
      </div>
    </main>
  );
};

export default Projects;
