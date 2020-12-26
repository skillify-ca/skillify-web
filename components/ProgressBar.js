const ProgressBar = (props) => {
  return (
    <div class="relative pt-1">
      <div class="flex mb-2 items-center justify-between">
        <div class="text-right">
          <span class="text-xs font-semibold inline-block text-white">
            {props.value}%
          </span>
        </div>
      </div>
      <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-white">
        <div
          style={{ width: props.value + "%" }}
          class={
            "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-" +
            props.color +
            "-800"
          }
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
