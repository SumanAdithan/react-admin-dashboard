import { OverviewPage } from '@pages';
import { render, screen } from '@testing-library/react';
import { it } from 'vitest';
import { describe, expect } from 'vitest';

describe('status cards', () => {
    it('should render all cards with respective title', () => {
        render(<OverviewPage />);
        expect(screen.getByText('Total Sales')).toBeInTheDocument();
        expect(screen.getByText('New Users')).toBeInTheDocument();
        expect(screen.getByText('Total Products')).toBeInTheDocument();
        expect(screen.getByText('Conversion Rate')).toBeInTheDocument();
    });
});
