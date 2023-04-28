import { render, screen, fireEvent } from '@testing-library/react';
import CommentForm from './index';

test('renders an H2 with the text "Comments"', () => {
    render(<CommentForm onFormSubmit={() => { }} />);
    const heading = screen.getByRole('heading', { name: /comments/i });
    expect(heading).toBeInTheDocument();
});

test('renders an input field to write a comment', () => {
    render(<CommentForm onFormSubmit={() => { }} />);
    const commentInput = screen.getByLabelText(/comment/i);
    expect(commentInput).toBeInTheDocument();
});

test('renders a submit button labeled "Send"', () => {
    render(<CommentForm onFormSubmit={() => { }} />);
    const submitButton = screen.getByRole('button', { name: /send/i });
    expect(submitButton).toBeInTheDocument();
});

test('After submitting the form, the comment is appended to the list of comments', () => {
    const onFormSubmit = jest.fn();
    const slug = 'test-slug';
    const commentText = 'This is a test comment';

    render(<CommentForm onFormSubmit={onFormSubmit} slug={slug} />);

    const commentInput = screen.getByLabelText('Comment:');
    const sendButton = screen.getByRole('button', { name: /send/i });

    fireEvent.change(commentInput, { target: { value: commentText } });
    fireEvent.click(sendButton);

    expect(onFormSubmit).toHaveBeenCalledTimes(1);
    expect(onFormSubmit).toHaveBeenCalledWith(slug, commentText);

});