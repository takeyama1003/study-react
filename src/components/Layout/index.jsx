export const Layout = (props) => {

    return (
      <div className={"flex flex-col items-center mx-auto min-h-screen px-2 max-w-2xl" }>
        {props.children}
      </div>
    );
  };