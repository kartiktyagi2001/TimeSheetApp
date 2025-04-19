import React from 'react';

function EntryForm({ formEntries, onFormChange, onAddRow, onDeleteRow, onSave }) {
  // Days labels for the hours inputs
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  return (
    <div className="form-container">
      {formEntries.map((entry, index) => (
        <div className="form-row" key={index}>
          <input
            type="text"
            placeholder="Employee"
            value={entry.employee}
            onChange={(e) => onFormChange(index, 'employee', e.target.value)}
          />
          <input
            type="text"
            placeholder="Project ID"
            value={entry.projectId}
            onChange={(e) => onFormChange(index, 'projectId', e.target.value)}
          />
          <input
            type="text"
            placeholder="Project Name"
            value={entry.projectName}
            onChange={(e) => onFormChange(index, 'projectName', e.target.value)}
          />
          {days.map(day => (
            <input
              key={day}
              type="number"
              placeholder={day.toUpperCase()}
              value={entry.hours[day]}
              onChange={(e) => onFormChange(index, day, e.target.value)}
            />
          ))}
          <input
            type="text"
            placeholder="Remarks"
            value={entry.remarks}
            onChange={(e) => onFormChange(index, 'remarks', e.target.value)}
          />
          <button className="delete-btn" onClick={() => onDeleteRow(index)}>Delete</button>
        </div>
      ))}
      <div className="buttons">
        <button onClick={onAddRow}>Add Row</button>
        <button onClick={onSave}>Save</button>
      </div>
    </div>
  );
}

export default EntryForm;
