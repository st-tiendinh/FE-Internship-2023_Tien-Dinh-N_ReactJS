export const Error = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="error-wrapper">
      <button className="btn btn-normal-outline-primary" onClick={handleReload}>
        Try to reload
      </button>
    </div>
  );
};
