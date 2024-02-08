export const ALL = "all";
export const PROJECT = "project";
export const PROJECT_EMPLOYEE = "project_employee";
export const EMPLOYEE_PROJECT = "employee_project";

export const options = [
  {
    value: ALL,
    label: "ALL",
  },
  {
    value: PROJECT,
    label: "PROJECT",
  },
  {
    value: PROJECT_EMPLOYEE,
    label: "PROJECT/EMPLOYEE",
  },
  {
    value: EMPLOYEE_PROJECT,
    label: "EMPLOYEE/PROJECT",
  },
];

export const columnHeaders = {
  [ALL]: ["Project", "Employee", "Date", "Hours"],
  [PROJECT]: ["Project", "Hours"],
  [PROJECT_EMPLOYEE]: ["Project", "Employee", "Hours"],
  [EMPLOYEE_PROJECT]: ["Employee", "Project", "Hours"],
};
