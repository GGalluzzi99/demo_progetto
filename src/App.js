// App.js
import React, { useEffect, useState } from "react";
import data from "./data";
import Select from "./components/Select";
import Table from "./components/Table";
import { ALL, PROJECT, PROJECT_EMPLOYEE, EMPLOYEE_PROJECT } from "./constants";
import './App.css';
const App = () => {
  const [tableContent, setTableContent] = useState([]);
  const [titleTable, setTitleTable] = useState(ALL);

  useEffect(() => {
    setTableContent(getAllData());
  }, []);

  const changeFilter = (event) => {
    changeTableDisplay(event.target.value);
    setTitleTable(event.target.value);
  };

  const getProjectOrEmployee = () => {
    let projects = data.map((el) => {
      return {
        projectId: el.project.id,
        projectName: el.project.name,
        employeeId: el.employee.id,
        employeeName: el.employee.name,
        hours: el.hours,
      };
    });
    const result = projects.reduce((accumulator, entry) => {
      const key = `${entry.projectId} ${entry.employeeId}`;

      if (!accumulator[key]) {
        accumulator[key] = {
          projectId: entry.projectId,
          employeeId: entry.employeeId,
          projectName: entry.projectName,
          employeeName: entry.employeeName,
          hours: 0,
        };
      }

      accumulator[key].hours += entry.hours;

      return accumulator;
    }, {});

    let resultArray = Object.values(result);
    return resultArray;
  };

  const getAllData = () => {
    let options = { day: "2-digit", month: "short", year: "numeric" };

    let customArray = data.map((el) => {
      return {
        projectId: el.project.id,
        projectName: el.project.name,
        employeeId: el.employee.id,
        employeeName: el.employee.name,
        date: new Date(el.date).toLocaleDateString("it-IT", options),
        hours: el.hours,
      };
    });
    return customArray;
  };

  const getProject = () => {
    let projects = data.map((el) => {
      return {
        projectId: el.project.id,
        projectName: el.project.name,
        hours: el.hours,
      };
    });

    const result = projects.reduce((accumulator, project) => {
      const projectName = project.projectName.trim(); 

      if (!accumulator[project.projectId]) {
        accumulator[project.projectId] = {
          projectName: projectName,
          hours: 0,
        };
      }

      accumulator[project.projectId].hours += project.hours;

      return accumulator;
    }, {});

    const resultArray = Object.values(result);

    return resultArray;
  };

  const getProjectEmployee = () => {
    let result = getProjectOrEmployee().sort(
      (a, b) => a.projectId - b.projectId
    );
    return result;
  };

  const getEmployeeProject = () => {
    let result = getProjectOrEmployee().sort(
      (a, b) => a.employeeId - b.employeeId
    );
    return result;
  };

  const changeTableDisplay = (titleTable) => {
    let contentTable = null;
    switch (titleTable) {
      case ALL:
        contentTable = getAllData();
        break;
      case PROJECT:
        contentTable = getProject();
        break;
      case PROJECT_EMPLOYEE:
        contentTable = getProjectEmployee();
        break;
      case EMPLOYEE_PROJECT:
        contentTable = getEmployeeProject();
        break;
      default:
        break;
    }

    setTableContent(contentTable);
  };

  return (
    <>
      <h1 className="title">Progetto Apuliasoft</h1>
      <Select titleTable={titleTable} changeFilter={changeFilter} />
      <Table titleTable={titleTable} tableContent={tableContent} />
    </>
  );
};

export default App;
