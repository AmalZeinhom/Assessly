import Button from "@/components/ui/button/Button";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-2 min-h-screen">
        <section>
          Hello
          <Button variant="icon">
            <Plus /> Start Exam
          </Button>
        </section>
        <section>Amal Nasr</section>
      </main>
    </>
  );
}
