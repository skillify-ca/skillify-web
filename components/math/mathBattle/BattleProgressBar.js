const BattleProgressBar = (props) => {
  return (
    <div className="relative pt-1">
      <div className="flex items-center justify-between mb-2">
        <div className="text-right">
          <span
            className={`text-s font-semibold inline-block text-${props.color}-400`}
          >
            {props.value * 10}%
          </span>
        </div>
      </div>
      <div className="flex h-4 mb-4 overflow-hidden text-xs bg-white rounded">
        <div
          style={{ width: props.value * 10 + "%" }}
          className={
            "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-" +
            props.color +
            "-400"
          }
        ></div>
      </div>
    </div>
  );
};

export default BattleProgressBar;

export async function getStaticProps(context) {
  return {
    props: {
      value: 45,
      color: "red",
    }, // will be passed to the page component as props
  };
}
