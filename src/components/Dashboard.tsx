import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";
import "../styles/Dashboard.css";

const Dashboard = ({ userId }) => {
  const [data, setData] = useState<any[]>([]);
  const { currentUser } = useAuth();
  const [searchQuery, setSearchQuery] = useState(
    currentUser?.displayName || "",
  );
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const apiKey = "AIzaSyCR30SIB2pKE9zgSwTLve8yRNoAfmzRWcQ";
      const sheetId = "1yxx3Ux59ZhWthyzTDZ3eZ8jQOvu2fm68MaA458mpdiA";
      const range = "Sheet1!A1:D10";
      const response = await axios.get(
        `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`,
      );
      setData(response.data.values);
    } catch (error) {
      console.error("Error fetching data from Google Sheets", error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchData();
    }
  }, [currentUser]);

  useEffect(() => {
    if (data.length > 0 && searchQuery) {
      const results = data.filter((row) =>
        row[0].toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setSearchResults(results);
    } else {
      setSearchResults(data);
    }
  }, [data, searchQuery]);

  return (
    <div>
      <table className="dashboard-table">
        <thead>
          <tr>
            {data[0] &&
              data[0].map((header, index) => <th key={index}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {(searchQuery ? searchResults : data).slice(1).map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
