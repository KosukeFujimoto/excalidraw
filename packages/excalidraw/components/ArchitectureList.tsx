import {
  convertToExcalidrawElements,
  type ExcalidrawElementSkeleton,
} from "../data/transform";

export const ServiceList = () => {
  const create = (e: any) => {
    console.log(e);
    const opts = { regenerateIds: false };
    //Create Element
    const elements = [
      {
        type: "rectangle",
        x: 100,
        y: 100,
        id: "rect-1",
      },
    ];
    let data = convertToExcalidrawElements(
      elements as ExcalidrawElementSkeleton[],
    );

    data = convertToExcalidrawElements(
      elements as ExcalidrawElementSkeleton[],
      opts,
    );
  };
  return (
    <div className="panelColumn">
      <div>
        <h3>ServiceList</h3>
        <div onClick={create}>S3</div>
      </div>
    </div>
  );
};
