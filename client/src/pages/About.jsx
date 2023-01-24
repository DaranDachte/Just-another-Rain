import React from "react";
import Navigation from "../components/Navigation";
import styles from "./About.module.css";
import ToggleVisibility from "./ToggleVisibility";
import { useState } from "react";
import hardSnow from "../assets/videos/hard_snow.mp4";
import { NavLink } from "react-router-dom";
const About = () => {
  const [version, setActiveVersion] = useState(0);
  return (
    <>
      <div className={styles.aboutBody}>
        <Navigation />

        <video
          className={styles.video}
          src={hardSnow}
          autoPlay
          muted
          loop
        ></video>

        <div className={styles.aboutProject}>
          Here you can get an idea of what this project is all about. What
          prompted me to create it. What is the purpose of the project. How I am
          trying to achieve this goal. For ease of explanation I created two
          versions.
        </div>
        <div className={styles.container}>
          <ToggleVisibility
            index={1}
            isActive={version === 1}
            setActiveVersion={setActiveVersion}
            title="Short explanation"
            text={
              <>
                <p className={styles.pIndent}>
                  The purpose of this project is to create a website to help
                  refugees and immigrants in Germany to adapt. A special feature
                  of the project is that the site should not only contain useful
                  information, but also help people visually to overcome
                  depression. For this purpose it has to be designed and built
                  accordingly.
                </p>
                <p className={styles.pIndent}>
                  The main theme is 'German rain'. It is the one that, as
                  experience shows, makes it very difficult for the mental
                  health of those coming to Germany. And it is the symbol of
                  depression, a depressed state and as a consequence - failure.
                  One of the aims of the project is to show people that it is
                  just rain and nothing more. And in this weather, you can be
                  successful and enjoy life The site is divided into several
                  pages, each of which has a specific purpose.
                </p>
                <p className={styles.pIndent}>
                  The following pages have been created so far:{" "}
                  <NavLink to="/about">About</NavLink> - On this page you are
                  now, there are two (short and full) descriptions of the
                  project.
                </p>
                <p className={styles.pIndent}>
                  <NavLink to="/diary">Diary</NavLink> - The point of this page
                  is this. It is a video diary. Initially (in the first video)
                  it tells the story of a man who is depressed because of the
                  German rain. And he wants to talk to people who have already
                  overcome this problem. They give their opinion and advice.
                  That is, every video contains positive experiences that can be
                  helpful to those who are in difficulty. I would like to
                  specify that at this stage this page is a prototype of a
                  future project. That is, in the future I hope to use more
                  professional tools to create editing and application of visual
                  effects. Simply speaking the videos will look more 'expensive
                  and of high quality'. Furthermore, if funding can be secured,
                  psychologists will be involved in the creation of each video.
                </p>
                <p className={styles.pIndent}>
                  The <NavLink to="/gallery">Gallery</NavLink> page shows short
                  stories of people who were forced to become refugees at an
                  advanced age.And in their new country, they have achieved
                  success and gained the respect of those around them. It is
                  common for refugees to be depressed because they are 30 or 50
                  years old, because their lives have 'passed them by', and
                  because they have no chance of success in Germany. The point
                  of this page is to show refugees that they are not the first
                  people to face this problem. And it is possible to become a
                  successful and respected person by starting from a clean
                  slate.
                </p>
                <p className={styles.pIndent}>
                  The{" "}
                  <NavLink to="/questions_and_answers">
                    Questions and Answers
                  </NavLink>{" "}
                  page is meant to help people with answers to frequently asked
                  questions - how to learn German, how to find a job, where to
                  turn if you are depressed. Also on this page there is a form
                  that everyone can fill in to ask a question and send it to the
                  site and get an answer later.
                </p>
                <p className={styles.pIndent}>
                  The{" "}
                  <NavLink to="/tests_news_donations">
                    Tests News Donations
                  </NavLink>{" "}
                  page was designed to provide positive news about refugees. It
                  will help refugees themselves to be on a positive note and it
                  will also help others to see refugees in a positive light.
                  Also on this page, anyone can find links to various online
                  tests to determine depression. This is necessary because many
                  refugees suffer from various forms of depression without even
                  realising it. There is also a form for donations if anyone
                  would like to help this project develop. Other pages may be
                  added to in the future. For example, creating various
                  databases or education pages. But this will require a serious
                  investment and may be possible once additional funding is
                  found.
                </p>
              </>
            }
          />

          <ToggleVisibility
            index={2}
            isActive={version === 2}
            setActiveVersion={setActiveVersion}
            title="Long Explanation"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                dignissimos ex corporis, quidem architecto itaque perferendis
                suscipit voluptas quibusdam ipsum veniam autem, quod maxime quo
                non adipisci qui nisi laudantium impedit quisquam neque iste
                nulla ea ullam! Animi, fugiat delectus libero quia at,
                consectetur fuga ab voluptatum aliquam illum totam aspernatur
                sunt quas ducimus mollitia dolore dignissimos voluptate expedita
                ipsam quam beatae exercitationem. Molestiae tempora laboriosam,
                nulla cum ad magnam temporibus reprehenderit excepturi quos
                perferendis, amet perspiciatis accusantium deserunt adipisci
                dolore assumenda sunt autem laudantium voluptate aperiam eum.
                Quod placeat iusto tenetur est pariatur eum quidem vitae non
                temporibus veniam amet doloribus at ipsum, esse velit eos saepe
                ratione, voluptatibus incidunt sit id? Velit nulla aspernatur
                facere laudantium illum cum, ut possimus earum accusantium odio
                nobis eum unde aperiam dolor nihil? Neque expedita dolor laborum
                qui optio delectus, doloribus ipsam! Ipsa molestias, repellendus
                eum libero necessitatibus quia veritatis nulla corrupti tempore
                accusamus expedita laudantium quaerat mollitia enim minima
                provident odit deleniti fuga error! Repudiandae cum, deserunt
                dolorum blanditiis repellendus obcaecati iure facere! Omnis
                perferendis repellat soluta laboriosam voluptatem reiciendis
                odio facere doloremque delectus vero veniam perspiciatis debitis
                aut veritatis, earum exercitationem! Deserunt cupiditate quia
                exercitationem. Voluptatum explicabo, asperiores animi quo
                praesentium quaerat. Asperiores magni quod sit neque consectetur
                pariatur odit, aliquam blanditiis sapiente officia non libero
                mollitia quo recusandae eaque eum assumenda, eos similique iste
                cumque amet? Maiores at obcaecati, laudantium nihil corporis
                praesentium necessitatibus quidem nisi ipsam eveniet! Voluptate
                libero vitae consequuntur earum quas doloremque dignissimos
                laborum? Quaerat tenetur ad autem quia blanditiis ipsum.
                Corrupti, voluptates ducimus. Modi voluptatum quis, sint velit
                saepe, veniam eius enim tempora sapiente reprehenderit vel ea
                provident at quam blanditiis aliquam quibusdam reiciendis
                nesciunt optio repellendus temporibus suscipit ex! Suscipit qui
                impedit sint quae eius earum ut odio magnam nulla, iste quidem
                est temporibus adipisci rerum blanditiis minima, similique,
                voluptate itaque recusandae possimus exercitationem ab aut?
                Corporis, vitae! Cumque voluptates dolorum aspernatur tempora
                omnis consequuntur expedita amet sunt quis, earum corporis quas
                magnam, alias nostrum rem sit aut cum consequatur est esse? At
                excepturi, molestias nostrum id, culpa repellat voluptates ullam
                obcaecati voluptatem perferendis similique aspernatur quis"
          />
        </div>
      </div>
    </>
  );
};

export default About;
