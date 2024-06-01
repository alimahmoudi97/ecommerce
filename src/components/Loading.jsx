import { ThreeDots } from "react-loader-spinner";

function Loading({
  width = "40",
  height = "40",
  color = "--color-secondary-900",
}) {
  return (
    <div>
      <ThreeDots
        visible={true}
        height={height}
        width={width}
        color={`rgb(var(${color}))`}
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
        }}
        wrapperClass=""
      />
    </div>
  );
}
export default Loading;
