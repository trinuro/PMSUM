import Action from "@/components/main_page/call_to_action";
import Hero from "@/components/main_page/hero";
import Highlights from "@/components/main_page/highlights";
import Objective from "@/components/main_page/objective";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <Objective></Objective>
      <Highlights></Highlights>
      <Action></Action>
    </main>
  );
}
