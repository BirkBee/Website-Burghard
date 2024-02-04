import { woodenfloors } from "@/lib/data";
import Image from "next/image";
import styled from "styled-components";

  try {
    return (
      <>
        <StyledTitle>All Outivities</StyledTitle>
        <StyledOutivitieCardContainer>
          {woodenfloors.map((woodenfloor) => (
            <StyledOutivitieCard key={woodenfloor.id}>
              <StyledImage
                src={woodenfloor.image}
                alt={woodenfloor.title}
                width={300}
                height={200}
              />
              <StyledOutivityTitle>{woodenfloor.title}</StyledOutivityTitle>
            </StyledOutivitieCard>
          ))}
        </StyledOutivitieCardContainer>
      </>
    );
  } catch (error) {
    console.log(error);
    return (
      <>
        <h1>Ooops... </h1>
        <p>
          Error Loading Outivities. We were unable to load the Outivities list.
          Please try again later.
        </p>
      </>
    );
  }
}

const StyledTitle = styled.h1`
  display: grid;
  height: 2em;
  place-content: center;
  background-color: var(--primary-color);
  color: var(--neutral-color);
`;

const StyledOutivitieCardContainer = styled.ul`
  display: grid;
  gap: 1rem;
  padding: 20px;
  place-content: center;
  gap: 50px;
`;

const StyledOutivitieCard = styled.li`
  position: relative;
  place-content: center;
  max-width: 640px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: var(--neutral-color) 0px 2px 1px, var(--neutral-color) 0px 4px 2px,
    var(--neutral-color) 0px 8px 4px, var(--neutral-color) 0px 16px 8px,
    var(--neutral-color) 0px 32px 16px;
`;

const StyledImage = styled(Image)`
  overflow: clip;
  overflow-clip-margin: content-box;
`;

const StyledOutivityTitle = styled.h2`
  margin: 10px 20px 0px 20px;
`;

export const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export const gochiHand = Gochi_Hand({
  weight: "400",
  subsets: ["latin"],
});

export default createGlobalStyle`
  *,
@@ -7,8 +25,33 @@ export default createGlobalStyle`
    box-sizing: border-box;
  }
  :root {
    --primary-color: #172633;
    --secondary-color-blue: #252629;
    --third-color: #08A689;
    --primary-color-hover: #FFBC0A;
    --neutral-color: #E5E5E5;
    @media (max-width: 599px) {font-size: 16px;}
    @media (min-width: 600px) {font-size: 18px;}
    @media (min-width: 1200px) {font-size: 20px;}
  }
  body {
    margin: 0;
    font-family: system-ui;
    font-family: ${poppins.style.fontFamily};
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  h1 {
    font-family: ${pacifico.style.fontFamily};
    letter-spacing: 2px;
  }