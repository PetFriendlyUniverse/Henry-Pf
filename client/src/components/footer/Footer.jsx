import MiniCards from "./components/MiniCards";

function Footer() {
  return (
    <div className="flex  w-full border-gray-200 bg-primary sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-center lg:justify-between">
        <MiniCards name="guachin" />
        <MiniCards name="guachin" />
        <MiniCards name="guachin" />
        <MiniCards name="guachin" />
        <MiniCards name="guachin" />
        <MiniCards name="mono" />
        <MiniCards name="guachin" />
        <MiniCards name="guachin" />
      </div>
    </div>
  );
}

export default Footer;
