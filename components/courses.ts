
export default function getCourseContents(slug: string) {
  const courses = {
    "core-courses": {
      title: "Core Courses (Common in All Specializations)",
      description:
        "Every participant of the program will start by completing the following two core courses:",
      courses: [
        {
          title1: "Quarter I (Core)",
          title2: "CS-101: Object-Oriented Programming using TypeScript",
          duration: "13 Weeks",
          description:
            "We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.",
          outline: [
            {
              title: "HTML and CSS (Homework)",
              items: [
                {
                  title: "Learn HTML by Hira Khan (Watch Recorded Videos)",
                  link: "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                },
                {
                  title: "Learn CSS Intro by Hira Khan (Watch Recorded Videos)",
                  link: "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
                }

              ]
            },
            {
              title: "Web 3.0 and Metaverse Theory",
              items: [
                {
                  title: "Introduction to Panaverse DAO",
                  link: "https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing"
                },
                {
                  title: "Web 3.0 User Guide",
                  link: "https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing"
                },
                {
                  title: "Complete Web 3 Assignments included in the Web 3 User Guide"
                },
                {
                  title: "Virtual and Augmented Metaverse User Guide",
                  link: "https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing"
                }
              ]
            },
            {
              title: "Fundamentals of JavaScript (ECMAScript 2022 Language Specification)",
              items: [
                {
                  title: "Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)",
                  link: "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo"
                },
                {
                  title: "Chapters 2-6, 13 of JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages",
                  link: "https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4"
                },
                {
                  title: "JavaScript Book Code",
                  link: "https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional"
                },
                {
                  title: "Getting Started Exercises with JavaScript and Node.js",
                }
              ]
            }
          ]
        },
      ],
    },
  };
}