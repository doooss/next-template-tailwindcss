import './global.css';

import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="ko">
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
};

export default Layout;
