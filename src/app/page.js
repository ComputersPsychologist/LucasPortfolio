import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header"
import SectionWelcome from "@/components/SectionWelcome/SectionWelcome";
import SectionTemplate from "@/components/SectionTemplate/SectionTemplate";
import SectionTechnologies from "@/components/SectionTemplate/SectionTechnologies/SectionTechnologies";
import SectionProjects from "@/components/SectionTemplate/SectionProjects/SectionProjects";
import Card from "@/components/Card/Card";

export default function Home() {

  const techIcons = ["HTML", "JavaScript", "CSS", "java", "react", "MySql", "git", "next", "Wordpress"]

  return (
    <>
      <Header />
      <SectionWelcome />
      <SectionTemplate 
        imgNum={1}
        color={'black'}
        title={'WHAT I DO'}
        sub={'Hundreds of succesful projects under our belt'}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, 
          euismod aliquet nisl nisl eu justo. Sed euismod, 
          nisl eget aliquam ultricies, nunc nisl aliquet nunc, 
          euismod aliquet nisl nisl eu justo.
        </p>
      </SectionTemplate>
      <SectionTemplate 
        imgNum={2}
        color={'black'}
        title={'WHAT I DO'}
        sub={'Hundreds of succesful projects under our belt'}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, 
          euismod aliquet nisl nisl eu justo. Sed euismod, 
          nisl eget aliquam ultricies, nunc nisl aliquet nunc, 
          euismod aliquet nisl nisl eu justo. 
        </p>
      </SectionTemplate>
      <SectionTemplate 
        imgNum={3}
        color={'black'}
        title={'TECHNOLOGIES I USE'}
        sub={'Hundreds of succesful projects under our belt'}
      >
        <SectionTechnologies 
          techsArray={techIcons}
        />
      </SectionTemplate>
      <SectionTemplate 
        imgNum={4}
        color={'white'}
        title={'PROJECTS'}
        sub={'Hundreds of succesful projects under our belt'}
      >
        <SectionProjects>
          <Card
            img={'/project1.jpg'}
            title={'SOLAR GROUP'}
            client={'Solar Group'}
            year={'2019'}
            techs={['fasgfaga', 'fasfsagha', 'gfhsasfdshs']}
            text={""}
           />
                     <Card
            img={'/project1.jpg'}
            title={'SOLAR GROUP'}
            client={'Solar Group'}
            year={'2019'}
            techs={['fasgfaga', 'fasfsagha', 'gfhsasfdshs']}
            text={""}
           />
        </SectionProjects>
      </SectionTemplate>
    </>
  );
}
