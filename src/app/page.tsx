import TextInput from "@/components/ui/input/components/TextInput";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col gap-6 p-8">
      {/* Default */}
      <TextInput
        id="email"
        label="Password"
        type="password"
        placeholder="enter your password"
      />

      {/* Focus: جربي الضغط داخل الحقل */}
      <TextInput id="username" label="Username" placeholder="Enter username" />

      {/* Error */}
      <TextInput
        id="invalid-email"
        label="Email"
        type="email"
        placeholder="user@example.com"
      />

      {/* Required */}
      <TextInput
        id="required-email"
        label="Email"
        type="email"
        placeholder="user@example.com"
        required
      />
    </main>
  );
}
