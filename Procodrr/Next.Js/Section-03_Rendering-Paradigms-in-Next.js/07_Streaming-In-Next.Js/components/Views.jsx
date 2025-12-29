const Views = async () => {
  await new Promise((res, _) =>
    setTimeout(() => {
      res();
    }, 3000)
  );
  return <div>10ks Views</div>;
};

export default Views;
