import Link from "next/link";

export default function LandingFooter(props) {
  return (
    <div>
      {/* <CountdownTimer /> */}
      <div className="flex items-center justify-between w-full px-4 py-2 bg-white border-b-2 text-murkrow">
        <Link href={"/"}>
          <img src="/images/logo.svg" className="cursor-pointer w-28 sm:w-40" />
        </Link>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
            className={`py-3 bg-gradient-to-b bg-charmander hover:bg-pikachu-500 text-white px-3 font-bold border-b-4 rounded-lg active:border-b-2 cursor-pointer`}
            {...props}
          >
            <p className={`text-base"`}>Apply Now</p>
          </button>
        </div>
      </div>
    </div>
  );
}
