import Departments from "@/components/team/Departments";
import SpeechYDP from "@/components/team/SpeechYDP";
import MT from "@/components/team/MT";
import BioAutography from "@/components/team/BioAutography";

export default function Team() {
    return (
      <main>
          <SpeechYDP/>
          <MT/>
          <Departments/>
          <BioAutography/>
      </main>
    );
  }