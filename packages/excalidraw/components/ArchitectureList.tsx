
export const ServiceList = () => {
  const create = (e: any) => {
    console.log(e);
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
