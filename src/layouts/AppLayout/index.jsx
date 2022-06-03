import { Header } from "src/layouts/AppLayout/Header";

export const AppLayout = (props) => {
    return (
      <div className={"flex flex-col items-center mx-auto min-h-screen px-2 max-w-2xl" }>
        <Header />
        {props.children}
      </div>
    );
  };