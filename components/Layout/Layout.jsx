import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

export default function Layout(props) {
  return (
    <>
      <MainHeader />
      {props.children}
    </>
  );
}
