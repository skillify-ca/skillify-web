const ProgressBar = (props) => {
  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div className="text-right">
          <span
            className={`text-s font-semibold inline-block text-${props.color}-400`}
          >
            {props.value * 10}%
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-white">
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

export default ProgressBar;

export async function getStaticProps(context) {
  return {
    props: {
      value: 45,
      color: "red",
    }, // will be passed to the page component as props
  };
}
