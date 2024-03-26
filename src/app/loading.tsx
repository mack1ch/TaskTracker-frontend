import { Spin } from "antd";

export default function Loading() {
  return (
    <>
      <span
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spin size="large" />
      </span>
      ;
    </>
  );
}
