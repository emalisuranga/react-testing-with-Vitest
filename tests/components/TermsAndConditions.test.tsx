import { it, expect, describe } from 'vitest';
import { render, screen } from "@testing-library/react";
import TermsAndConditions from '../../src/components/TermsAndConditions';
import userEvent from '@testing-library/user-event';


describe('TermsAndConditions', () => {
    it('should render no users when no users are provided', () => {
        render(<TermsAndConditions />)

        const [heading, checkbox] = [screen.getByRole('heading'), screen.getByRole('checkbox')];
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/Terms & Conditions/i);

        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();
    });

    it('should render button when users are provided', async () => {
        render(<TermsAndConditions />)

        const checkbox = screen.getByRole('checkbox');
        const user = userEvent.setup();
        await user.click(checkbox);

        expect(checkbox).toBeChecked();
        expect(screen.getByRole('button')).toBeEnabled();
    });
})