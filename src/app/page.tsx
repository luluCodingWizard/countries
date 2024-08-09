import Countries from "./components/Countries";
import SearchBar from "./components/SearchBar";
import StoreProvider from "./StoreProvider";
export default function Home() {
  return (
    <StoreProvider>
      <main className=" container">
        <SearchBar />
        <Countries />
      </main>
    </StoreProvider>
  );
}
