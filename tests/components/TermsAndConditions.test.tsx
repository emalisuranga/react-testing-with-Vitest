import { it, expect, describe } from 'vitest';
import { render, screen } from "@testing-library/react";
import TermsAndConditions from '../../src/components/TermsAndConditions';


describe('TermsAndConditions', () => {
    it('should render no users when no users are provided', () => {
        render(<TermsAndConditions />)

        const [heading, checkbox] = [screen.getByRole('heading'), screen.getByRole('checkbox')];
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/Terms & Conditions/i);

        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();
    });
})