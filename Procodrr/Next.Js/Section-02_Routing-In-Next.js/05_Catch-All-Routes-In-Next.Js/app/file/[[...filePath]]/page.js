const File = async ({ params }) => {
  const { filePath } = await params;
  return (
    <h1>
      File <b>./{filePath?.join("/")}</b>
    </h1>
  );
};

export default File;
