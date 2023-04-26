import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
    color: red;
`;

export default function Navigation() {
    return(
    <div>
      <p>
        <StyledLink href="/" aria-label="Pieces">List of all Pieces</StyledLink>
      </p>
      <p>
        <StyledLink href="/spotlight" aria-label="Spotlight">Get your inspiration here</StyledLink>
      </p>
      <p>
        <StyledLink href="/favorites" aria-label="Favorites">favorites</StyledLink>
      </p>
    </div>
    )
}