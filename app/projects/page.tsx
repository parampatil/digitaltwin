import React from "react";
import PublicationCard from "./PublicationCard";

const Projects = () => {
  const data = [
    {
      title: "Project Title",
      date: "23 June 2024",
      description:
        "The paper discusses the results of a study which explored advanced learners of English engagement with their mobile devices to develop learning experiences that meet their needs and goals as foreign language learners. The data were collected from 20 students by means of a semi-structured interview. The gathered data were subjected to qualitative and quantitative analysis. The results of the study demonstrated that, on the one hand, some subjects manifested heightened awareness relating to the advantageous role of mobile devices in their learning endeavors, their ability to reach for suitable tools and retrieve necessary information so as to achieve their goals, meet their needs and adjust their learning of English to their personal learning styles, and on the other, a rather intuitive and/or ad hoc use of their mobile devices in the classroom.",
      authors: "Denizhan Pak, Donsuk Lee, Samantha M. W. Wood, Justin N. Wood",
    },
    {
      title: "Project Title",
      date: "23 June 2024",
      description:
        "The paper discusses the results of a study which explored advanced learners of English engagement with their mobile devices to develop learning experiences that meet their needs and goals as foreign language learners. The data were collected from 20 students by means of a semi-structured interview. The gathered data were subjected to qualitative and quantitative analysis. The results of the study demonstrated that, on the one hand, some subjects manifested heightened awareness relating to the advantageous role of mobile devices in their learning endeavors, their ability to reach for suitable tools and retrieve necessary information so as to achieve their goals, meet their needs and adjust their learning of English to their personal learning styles, and on the other, a rather intuitive and/or ad hoc use of their mobile devices in the classroom.",
      authors: "Denizhan Pak, Donsuk Lee, Samantha M. W. Wood, Justin N. Wood",
    },
    {
      title: "Project Title",
      date: "23 June 2024",
      description:
        "The paper discusses the results of a study which explored advanced learners of English engagement with their mobile devices to develop learning experiences that meet their needs and goals as foreign language learners. The data were collected from 20 students by means of a semi-structured interview. The gathered data were subjected to qualitative and quantitative analysis. The results of the study demonstrated that, on the one hand, some subjects manifested heightened awareness relating to the advantageous role of mobile devices in their learning endeavors, their ability to reach for suitable tools and retrieve necessary information so as to achieve their goals, meet their needs and adjust their learning of English to their personal learning styles, and on the other, a rather intuitive and/or ad hoc use of their mobile devices in the classroom.",
      authors: "Denizhan Pak, Donsuk Lee, Samantha M. W. Wood, Justin N. Wood",
    },
  ];
  return (
    <div>
      <h1 className="text-4xl font-bold drop-shadow-lg text-black text-center my-5 mx-auto dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert">
        Ongoing Research and publication
      </h1>
      <div className="grid lg:grid-cols-2 gap-4 p-4">
        {data.map((item) => (
          <PublicationCard
            key={item.title}
            title={item.title}
            date={item.date}
            description={item.description}
            authors={item.authors}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
