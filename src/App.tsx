import { Body } from "./components/Body/Body.tsx";
import ConverterPage from "./pages/Converter/ConverterPage.tsx";
import { AppWrapper } from "@/components/AppWrapper/AppWrapper.tsx";
import Header from "@/components/Header/Header.tsx";
import Footer from "@/components/Footer/Footer.tsx";

function App() {
  return (
    <AppWrapper>
      <Header></Header>
      <Body>
        <ConverterPage></ConverterPage>
      </Body>
      <Footer></Footer>
    </AppWrapper>
  );
}

export default App;
