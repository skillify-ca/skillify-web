export default function Upgrade() {
  return (
    <div className="flex flex-col text-white items-center justify-center max-h-80 space-y-2 md:mt-10 mt-8">
      <h1 className="flex font-bold text-base md:text-3xl max-w-xl text-center">
        Upgrade your plan at any time to unlock premium features.
      </h1>
      <img className="w-full" src="/images/freemium/gatedContentRow.svg" />
      <ul className="max-w-3xl md:text-lg text-xs bg-rattata/20 rounded-lg p-6 flex flex-col space-y-2">
        <li>Locked features are part of the premium plan.</li>
        <li>You can easily upgrade at any point during your free trial.</li>
        <li>Click on the link below to schedule a call.</li>
      </ul>
      <p className="font-bold text-xs md:text-lg hover:scale-110 hover:text-pikachu-500">
        <a href="http://www.joinskillify.com/call">www.joinskillify.com/call</a>
      </p>
    </div>
  );
}
