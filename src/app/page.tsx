import CourseList from "@/components/Courses";
import OptionDeltaCalculator from "@/components/OptionDeltaCalculator";

import Main from "@/components/main";


import Welcome from "@/components/welcome";


export default function Home() {
  return (
    <>


      <Welcome />

      <Main />

      <OptionDeltaCalculator />

      <CourseList/>

  
    </>
  );
}
