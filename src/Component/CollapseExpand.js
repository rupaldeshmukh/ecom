import React, { useState } from "react";

const RowCollapseExpand = () => {
  const [expandedRows, setExpandedRows] = useState([]); // Tracks expanded rows

  const data = [
    { id: 1, name: "Row 1", details: "Details for Row 1" },
    { id: 2, name: "Row 2", details: "Details for Row 2" },
    { id: 3, name: "Row 3", details: "Details for Row 3" },
    { id: 4, name: "Row 4", details: "Details for Row 4" },
  ];

  const toggleRow = (id) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setExpandedRows(data.map((item) => item.id));
  };

  const collapseAll = () => {
    setExpandedRows([]);
  };

  return (
    <div style={{ margin: "20px" }}>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={expandAll} style={{ marginRight: "10px" }}>
          Expand All
        </button>
        <button onClick={collapseAll}>Collapse All</button>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}>Row</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <React.Fragment key={row.id}>
              <tr>
                <td style={{ padding: "8px", borderBottom: "1px solid #ccc", display: "flex", alignItems: "center" }}>
                  <button
                    onClick={() => toggleRow(row.id)}
                    style={{ cursor: "pointer", background: "none", border: "none", marginRight: "8px" }}
                  >
                    {expandedRows.includes(row.id) ? "-" : ">"}
                  </button>
                  {row.name}
                </td>
              </tr>
              {expandedRows.includes(row.id) && (
                <tr>
                  <td
                    style={{ padding: "8px", background: "#f9f9f9", borderBottom: "1px solid #ccc" }}
                  >
                    {row.details}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RowCollapseExpand;
