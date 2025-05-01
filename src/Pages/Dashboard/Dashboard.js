import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../../Features/Dashboard.slice';
import TableFilterTittle from '../../Components/Common/TableFilterTitle';

function Dashboard() {
  const dispatch = useDispatch();
  const testState = useSelector((state) => state);
  console.log(testState, "testState");

  const cards = [
    { title: 'Total Users', value: '1,234' },
    { title: 'Revenue', value: '$45,678' },
    { title: 'Active Projects', value: '25' },
    { title: 'Tasks Complete', value: '156' }
  ];

  useEffect(() => {
    dispatch(setData("hello"))
  }, [])

  return (
    <div>
      <TableFilterTittle title={"Overview"} />
      <div className="card-grid">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-value">{card.value}</p>
          </div>
        ))}
      </div>
      <div className="card activity-card">
        <h3 className="card-title">Recent Activity</h3>
        <div className="activity-list">
          <p className="activity-item">Project X was updated</p>
          <p className="activity-item">New team member added</p>
          <p className="activity-item">Client meeting scheduled</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
