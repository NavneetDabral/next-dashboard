import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Link
        className="border-2 p-10 border-solid border-zinc-700"
        href="/dashboard/settings"
      >
        Settings
      </Link>
    </main>
  );
}
