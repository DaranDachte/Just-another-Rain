import React from "react";
import Navigation from "../components/Navigation";
import styles from "./About.module.css";
import ToggleVisibility from "./ToggleVisibility";
import video from "../img/hard snow.mp4";
const About = () => {
  return (
    
    <>
    <Navigation />
      <video src={video} autoPlay muted loop id="myVideoAbout"></video>
      <div>
        <div>
          <ToggleVisibility title="Short Version">
            <div className={styles.short}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                est dolorum praesentium temporibus ipsam dolor quod aut at
                aspernatur quis iusto quaerat doloribus incidunt non a cum,
                excepturi dolorem maxime? Doloribus atque, fugiat deserunt amet
                dolorem eveniet at necessitatibus vitae corrupti, reprehenderit,
                iste nostrum nobis ullam velit harum laudantium quam veniam ab
                quaerat! Modi provident perferendis quod sit libero vitae
                corporis atque, ea distinctio nesciunt perspiciatis debitis
                harum dolores voluptate qui quibusdam beatae! Laudantium ipsam
                aliquid eum, ea vel odit deserunt excepturi officiis mollitia
                cumque ratione cum quos nisi deleniti sunt itaque voluptates
                unde reprehenderit necessitatibus non consectetur. Itaque,
                minima!
              </p>
            </div>
          </ToggleVisibility>

          <ToggleVisibility title="Long Version">
            <div className={styles.long}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
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
                obcaecati voluptatem perferendis similique aspernatur quis
              </p>
            </div>
          </ToggleVisibility>
        </div>
      </div>
    </>
  );
};

export default About;
