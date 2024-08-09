import Countries from "./components/Countries";
import StoreProvider from "./StoreProvider";
export default function Home() {
  return (
    <StoreProvider>
      <main className=" container">
        <Countries />
      </main>
    </StoreProvider>
  );
}
