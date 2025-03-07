import styled from "styled-components";
import Header from "./Header";
import Bottom from "./Bottom";

interface LayoutProps {
    children: React.ReactNode;
    showHeader?: boolean;
    showBottom?: boolean;
}

function Layout({ children, showHeader, showBottom }: LayoutProps) {
    return (
        <Container>
            {showHeader && <Header />}
            <Content showHeader={showHeader} showBottom={showBottom}>
                {children}
            </Content>
            {showBottom && <Bottom />}
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const Content = styled.main<{ showHeader: boolean; showBottom: boolean }>`
  position: relative;
  top: ${({ showHeader }) => (showHeader ? "65px" : "0")};
  height: ${({ showHeader, showBottom }) => {
        if (showHeader && showBottom) {
            return "calc(100vh - 130px)";
        } else if (showHeader || showBottom) {
            return "calc(100vh - 65px)";
        } else {
            return "100vh";
        }
    }};
  overflow-y: scroll; 

  scrollbar-width: none; 
  scrollbar-color: transparent transparent;
`;
export default Layout;