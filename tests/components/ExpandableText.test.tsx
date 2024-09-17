import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExpandableText from '../../src/components/ExpandableText';


describe('ExpandableText', () => {
    it('should render the full text if less than 255 characters', () => {
        const text = "short text";
        render(<ExpandableText text= { text } />)
        expect(screen.getByText(text)).toBeInTheDocument();

    });

    it('should render the full text if greater than 255 characters', () => {
        const text = 'abc'.repeat(256);
        const truncatedText = text.substring(0, 255) + '...';

        render(<ExpandableText text= { text } />)
        expect(screen.getByText(truncatedText)).toBeInTheDocument();

    });
})