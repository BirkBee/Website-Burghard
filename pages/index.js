import { woodenfloors } from "@/lib/data";
import Image from "next/image";
import styled from "styled-components";

export default function HomePage() {
  try {
    return (
      <>
        <StyledTitle>Burghard Beese Parkettböden</StyledTitle>
        <StyledWoodenfloorCardContainer>
          {woodenfloors.map((woodenfloor) => (
            <StyledWoodenfloorCard key={woodenfloor.id}>
              <StyledImage
                src={woodenfloor.image}
                alt={woodenfloor.title}
                width={300}
                height={200}
              />
              <StyledWoodenfloorTitle>
                {woodenfloor.title}
              </StyledWoodenfloorTitle>
            </StyledWoodenfloorCard>
          ))}
        </StyledWoodenfloorCardContainer>
      </>
    );
  } catch (error) {
    console.log(error);
    return (
      <>
        <h1>Ooops... </h1>
        <p>
          Error Loading Page. We were unable to load the Page. Please try again
          later.
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
  color: var(--primary-color-hover);
`;

const StyledWoodenfloorCardContainer = styled.ul`
  display: grid;
  gap: 1rem;
  padding: 20px;
  place-content: center;
  gap: 50px;
`;

const StyledWoodenfloorCard = styled.li`
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

const StyledWoodenfloorTitle = styled.h2`
  margin: 10px 20px 0px 20px;
`;
