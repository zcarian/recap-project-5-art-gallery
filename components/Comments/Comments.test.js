import { render, screen } from '@testing-library/react';
import Comments from './index';

test('renders a list of comments', () => {
    const comments = [
        {
            text: 'Comment 1',
            time: new Date('2023-04-28T12:19:36.175Z'),
        },
        {
            text: 'Comment 2',
            time: new Date('2023-04-28T12:20:36.175Z'),
        },
    ];

    render(<Comments commentsList={comments} />);

    const commentList = screen.getByRole('list');
    const commentItems = screen.getAllByRole('listitem');

    expect(commentList).toBeInTheDocument();
    expect(commentItems.length).toBe(comments.length);

    comments.forEach((comment, index) => {
        const commentText = screen.getByText(comment.text);

        expect(commentText).toBeInTheDocument();
    });
});

test('Each comment text, date, and time is displayed', () => {
    const comments = [{
        text: 'Comment 1',
        time: new Date('4/23/2023, 10:51:52 AM')
    }, {
        text: 'Comment 2',
        time: new Date('4/1/2024, 01:27:35 PM')
    }, {
        text: 'Comment 3',
        time: new Date('5/12/2023, 10:13:32 PM')
    }];

    render(<Comments commentsList={comments} />);

    const commentElements = screen.getAllByRole('listitem');
    expect(commentElements).toHaveLength(3);

    const commentTextElements = commentElements.map(li => li.querySelector('p:first-child'));
    expect(commentTextElements[0]).toHaveTextContent('Comment 1');
    expect(commentTextElements[1]).toHaveTextContent('Comment 2');
    expect(commentTextElements[2]).toHaveTextContent('Comment 3');

    const commentTimeElements = commentElements.map(li => li.querySelector('p:last-child'));
    expect(commentTimeElements[0]).toHaveTextContent('4/23/2023, 10:51:52 AM');
    expect(commentTimeElements[1]).toHaveTextContent('4/1/2024, 1:27:35 PM');
    expect(commentTimeElements[2]).toHaveTextContent('5/12/2023, 10:13:32 PM');
});