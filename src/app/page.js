import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header"
import SectionWelcome from "@/components/SectionWelcome/SectionWelcome";
import SectionTemplate from "@/components/SectionTemplate/SectionTemplate";

export default function Home() {
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
          euismod aliquet nisl nisl eu justo. Sed euismod, 
          nisl eget aliquam ultricies, nunc nisl aliquet nunc, 
          euismod aliquet nisl nisl eu justo. 
          Donec a enim et justo facilisis lacinia.
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
          euismod aliquet nisl nisl eu justo. Sed euismod, 
          nisl eget aliquam ultricies, nunc nisl aliquet nunc, 
          euismod aliquet nisl nisl eu justo. 
          Donec a enim et justo facilisis lacinia.
        </p>
      </SectionTemplate>
      <SectionTemplate 
        imgNum={3}
        color={'black'}
        title={'WHAT I DO'}
        sub={'Hundreds of succesful projects under our belt'}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, 
          euismod aliquet nisl nisl eu justo. Sed euismod, 
          nisl eget aliquam ultricies, nunc nisl aliquet nunc, 
          euismod aliquet nisl nisl eu justo. Sed euismod, 
          nisl eget aliquam ultricies, nunc nisl aliquet nunc, 
          euismod aliquet nisl nisl eu justo. 
          Donec a enim et justo facilisis lacinia.
        </p>
      </SectionTemplate>

    </>
  );
}
