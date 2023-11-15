import { useSession } from "src/hooks/useSession";

export function Home() {
  const { session } = useSession();

  return (
    <>
      <h2>Home</h2>
      <h2>{JSON.stringify(session)}</h2>
    </>
  );
}
