import React, { useState } from "react";

const initialData = [
  { id: "1", message: "This is message number 1", notification: "Type 1", mark: "good", status: "active" },
  { id: "2", message: "This is message number 2", notification: "Type 1", mark: "bad", status: "active" },
  { id: "3", message: "This is message number 3", notification: "Type 2", mark: "good", status: "inactive" },
  { id: "4", message: "This is message number 4", notification: "Type 1", mark: "bad", status: "active" },
  { id: "5", message: "This is message number 5", notification: "Type 3", mark: "average", status: "inactive" },
  { id: "6", message: "This is message number 5", notification: "Type 3", mark: "bad", status: "active" },
  { id: "7", message: "This is message number 5", notification: "Type 3", mark: "good", status: "inactive" },
  { id: "8", message: "This is message number 5", notification: "Type 4", mark: "bad", status: "active" },
];

function CheckboxSelectionWithSelectAll() {
  const [selectedData, setSelectedData] = useState([]);

  // Handle individual checkbox change
  const handleCheckboxChange = (notification) => {
    setSelectedData((prevSelected) => {
      const exists = prevSelected.some((selectednotification) => selectednotification.id === notification.id);
      if (exists) {
        // Remove the notification if it is already selected
        return prevSelected.filter((selectednotification) => selectednotification.id !== notification.id);
      } else {
        // Add the notification if it is not already selected
        return [...prevSelected, { id: notification.id, message: notification.message, notification: notification.notification }];
      }
    });
  };

  // Handle "Select All" checkbox
  const handleSelectAll = (isChecked) => {
    if (isChecked) {
      // Add all notifications to selectedData
      setSelectedData(
        initialData.map((notification) => ({
          id: notification.id,
          message: notification.message,
          notification: notification.notification,
        }))
      );
    } else {
      // Clear all selected notifications
      setSelectedData([]);
    }
  };

  // Check if "Select All" checkbox should be checked
  const isAllSelected = selectedData.length === initialData.length;

  return (
    <div>
      <h3>Checkbox Selection with "Select All"</h3>

      {/* Select All Checkbox */}
      <div style={{ marginBottom: "10px" }}>
        <label>
          <input
            type="checkbox"
            onChange={(e) => handleSelectAll(e.target.checked)}
            checked={isAllSelected}
          />
          Select All
        </label>
      </div>

      {/* Individual Checkboxes */}
      <ul>
        {initialData.map((notification) => (
          <li key={notification.id} style={{ marginBottom: "10px" }}>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(notification)}
                checked={selectedData.some((selectednotification) => selectednotification.id === notification.id)}
              />
              {notification.message} - {notification.notification}
            </label>
          </li>
        ))}
      </ul>

      {/* Display Selected Data */}
      <h4>Selected Data:</h4>
      <pre>{JSON.stringify(selectedData, null, 2)}</pre>
    </div>
  );
}

export default CheckboxSelectionWithSelectAll;
