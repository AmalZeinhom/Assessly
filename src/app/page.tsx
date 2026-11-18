import SearchInput from "@/components/ui/input/components/SearchInput";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col gap-6 p-8">
      <SearchInput
        label="Search Users"
        placeholder="Search by name or email"
      />
    </main>
  );
}
