import { it, expect, describe } from 'vitest';
import { User } from "../../src/entities";
import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";

describe('UserAccount', () => {
    it('works', () => { 
        const user: User = {
            id: 1,
            name: 'John Doe'
        }
        render(<UserAccount user={user} />)
        expect(screen.getByText(user.name)).toBeInTheDocument();
    });
    it('should render edit button when user is admin', () => { 
        const user: User = {
            id: 1,
            name: 'John Doe',
            isAdmin: true
        }
        render(<UserAccount user={user} />)
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/edit/i);
    });
    it('should not render edit button when user is admin', () => { 
        const user: User = {
            id: 1,
            name: 'John Doe',
            isAdmin: false
        }
        render(<UserAccount user={user} />)
        const button = screen.queryByRole('button');
        expect(button).not.toBeInTheDocument();
    });
})