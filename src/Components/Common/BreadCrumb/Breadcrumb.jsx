
import React, { useEffect, useState } from 'react'
import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';

function BreadcrumbComp() {
    const location = useLocation()
    const [pageHeader, setPageHeader] = useState('');

    const createBreadcrumb = (items, separator = '>') => (
        <div className=''>
            <Breadcrumb separator={separator} items={items} />
        </div>
    );

    const breadcrumbMap = {
        '/dashboard': createBreadcrumb([{ title: 'Dashboard' }]),
        '/analytics': createBreadcrumb([
            { title: <Link to='dashboard'>Dashboard</Link> },
            { title: 'Users' },
            { title: '12345' },
        ]),
        '/dashboard': createBreadcrumb([{ title: 'Dashboard' }]),
        '/monthly': createBreadcrumb([
            { title: <Link to='dashboard'>Dashboard</Link> },
            { title: 'monthly' },
            { title: '12345' },
        ]),
    }

    const changePageHeader = () => {
        const currentPath = location.pathname;
        setPageHeader(breadcrumbMap[currentPath]);
    };

    useEffect(() => {
        changePageHeader()
    }, [])
    return (
        <div style={{ borderBottom: "1px solid red", marginTop: "-21px", padding: "26px", borderBottom: "1px solid #E7E9ED"}}>
            {pageHeader}
        </div>
    )
}

export default BreadcrumbComp
