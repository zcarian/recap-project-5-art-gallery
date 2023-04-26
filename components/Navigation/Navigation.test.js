import Navigation from "."
import { render, screen } from "@testing-library/react";

test('A navigation links labeled "Spotlight", "Pices" and "Favorites" are displayed', () => {
    render(<Navigation />);
    const spotlight = screen.getByLabelText(/spotlight/i)
    expect(spotlight).toBeInTheDocument()

    const pieces = screen.getByLabelText(/pieces/i)
    expect(pieces).toBeInTheDocument()

    const favorites = screen.getByLabelText(/favorites/i)
    expect(favorites).toBeInTheDocument()
});