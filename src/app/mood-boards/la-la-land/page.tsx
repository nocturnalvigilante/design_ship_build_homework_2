import Link from "next/link";

export default function Page() {
  return (
    <main className="p-10">
      <Link href="/" className="font-mono text-xs underline">&larr; Hub</Link>
      <h1 className="mt-6 text-2xl tracking-tight">la-la-land</h1>
      <p className="mt-2 text-sm opacity-60">In progress.</p>
    </main>
  );
}
