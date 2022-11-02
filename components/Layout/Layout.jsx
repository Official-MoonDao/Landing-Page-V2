import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

export default function Layout(props) {
  return (
    <div className="flex-col overflow-x-hidden">
      <MainHeader />
      {props.children}
      <MainFooter />
    </div>
  );
}
