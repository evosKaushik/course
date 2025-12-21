const ServicesLayout = ({ children }) => {
  return (
    <section style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between'}}>
      <h2>ServicesLayout</h2>
      {children}
    </section>
  );
};

export default ServicesLayout;
