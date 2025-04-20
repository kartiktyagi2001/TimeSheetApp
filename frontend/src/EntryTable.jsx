import React from 'react';

function EntryTable({ entries }) {
  return (
    <table className="entries-table">
      <thead>
        <tr>
          <th>Employee</th>
          <th>Project ID</th>
          <th>Project Name</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
          <th>Sun</th>
          <th>Total</th>
          <th>Remarks</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, idx) => (
          <tr key={idx}>
            <td>{entry.employee}</td>
            <td>{entry.projectId}</td>
            <td>{entry.projectName}</td>
            <td>{entry.hours.mon}</td>
            <td>{entry.hours.tue}</td>
            <td>{entry.hours.wed}</td>
            <td>{entry.hours.thu}</td>
            <td>{entry.hours.fri}</td>
            <td>{entry.hours.sat}</td>
            <td>{entry.hours.sun}</td>
            <td>{entry.total}</td>
            <td>{entry.remarks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EntryTable;
