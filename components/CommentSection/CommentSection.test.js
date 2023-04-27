import { render, screen } from '@testing-library/react';
import CommentSection from './index';

describe('CommentSection', () => {
    it('renders a list of comments with the headline "Comments"', () => {
        const comments = [
            {
                text: 'Comment 1',
            },
            {
                text: 'Comment 2',
            },
        ];

        render(<CommentSection comments={comments} />);

        const commentsHeader = screen.getByText(/Comments/i);
        const commentList = screen.getByRole('list');

        expect(commentsHeader).toBeInTheDocument();
        expect(commentList).toBeInTheDocument();
    });

    it('renders an input field to write a comment', () => {
        const comments = [];
        render(<CommentSection comments={comments} />);

        const commentInput = screen.getByRole('textbox');
        expect(commentInput).toBeInTheDocument();
    });

    it('renders a submit button labeled "Send"', () => {
        const comments = [];
        render(<CommentSection comments={comments} />);

        const submitButton = screen.getByRole('button', { name: /Send/i });
        expect(submitButton).toBeInTheDocument();
    });

    it('renders each comment text', () => {
        const comments = [
            {
                text: 'Comment 1',
                time: new Date('2023-04-27T10:00:00Z'),
            },
            {
                text: 'Comment 2',
                time: new Date('2023-04-27T11:00:00Z'),
            },
        ];

        render(<CommentSection comments={comments} />);

        const commentTextElements = screen.getAllByText(/Comment/);
        expect(commentTextElements.length).toBe(comments.length);
    });
});