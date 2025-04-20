import React from 'react';
import './EntryForm.css';

function EntryForm({ formEntries, onFormChange, onAddRow, onDeleteRow, onSave }) {
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  const employeeOptions = ['Vasu Rana', 'GGunjan', 'plaese add more in entryform.js'];
  const activityOptions = ['Automation Support', 'Internal Meeting', 'Development', 'Testing', 'Documentation'];
  return (
    <div className="form-wrapper">


      <div className="form-row header-row">
        <div>Employee</div>
        <div>Project ID</div>
        <div>Activity</div>
        {days.map(day => (
          <div key={day}>{day.charAt(0).toUpperCase() + day.slice(1)}</div> //gpt logic
        ))}
        <div>Remarks</div>
        <div>Total</div>
        <div>Delete</div>
      </div>  {/* merge these with below section */}


      {formEntries.map((entry, index) => {
        const totalHours = Object.values(entry.hours).reduce((sum, val) => sum + Number(val || 0), 0);
        return (
          <div className="form-row" key={index}>
            <select value={entry.employee} onChange={(e) => onFormChange(index, 'employee', e.target.value)}>
              <option value="">Select</option>
              {employeeOptions.map(emp => (
                <option key={emp} value={emp}>{emp}</option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Project ID"
              value={entry.projectId}
              onChange={(e) => onFormChange(index, 'projectId', e.target.value)}
            />

            <select value={entry.projectName} onChange={(e) => onFormChange(index, 'projectName', e.target.value)}>
              <option value="">Select</option>
              {activityOptions.map(act => (
                <option key={act} value={act}>{act}</option>
              ))}
            </select>

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

            <div>{totalHours}</div>
            <button className="delete-btn" onClick={() => onDeleteRow(index)}>🗑️</button>
          </div>
        );
      })}

      <div className="form-actions">
        <button onClick={onAddRow}>Add Row</button>
        <button onClick={onSave}>Save</button>
      </div>
    </div>
  );
}

export default EntryForm;
