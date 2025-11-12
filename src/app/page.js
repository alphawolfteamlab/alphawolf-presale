import ConnectButton from "./components/ConnectButton";

export default function Home() {
  return (
    <main>
      <section>
        <button
          disabled
          className="mt-6 rounded-lg px-5 py-3 bg-gray-700 text-gray-300 cursor-not-allowed"
          title="Cüzdan entegrasyonu sonrası açılacak"
        >
          Satın Al (yakında)
        </button>

        <div className="mt-6">
          <ConnectButton chain="fuji" />
        </div>

        <p className="mt-10 text-xs text-gray-500">
          * Demo arayüzü – cüzdan bağlantısı ve akıllı sözleşme işlemleri sonraki adımda eklenecek.
        </p>
      </section>
    </main>
  );
}