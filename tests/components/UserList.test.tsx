import { it, expect, describe } from 'vitest';
import { User } from "../../src/entities";
import { render, screen } from "@testing-library/react";
import UserList from '../../src/components/UserList';


describe('UserList', () => {
    it('should render no users when no users are provided', () => { 
        
        render(<UserList users={[]} />)
        expect(screen.getByText(/No users available/i)).toBeInTheDocument();
    });
    it('should render a list of users', () => { 

        const users: User[] = [
            {
                id: 1,
                name: 'John Doe'
            },
            {
                id: 2,
                name: 'Jane Doe'
            }
        ]
        
        render(<UserList users={users} />)

        users.forEach((user) => {
            const link = screen.getByRole('link', { name: user.name });
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', `/users/${user.id}`);
        })
    });
})