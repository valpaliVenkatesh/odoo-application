import React from "react";
import Application from "../Application";
import "./index.css";

const dataArray = [
  {
    id: 1,
    logoUrl:
      "//download.odoocdn.com/pricing/icons/15.0/crm/static/description/icon.svg",
    name: "CRM",
    cost: "8.00",
  },
  {
    id: 2,
    logoUrl:
      "//download.odoocdn.com/pricing/icons/15.0/account/static/description/icon.svg",
    name: "Invoicing",
    cost: "4.00",
  },
  {
    id: 3,
    logoUrl:
      "//download.odoocdn.com/pricing/icons/15.0/sale_management/static/description/icon.svg",
    name: "Sales",
    cost: "6.00",
  },
  {
    id: 4,
    logoUrl:
      "//download.odoocdn.com/pricing/icons/15.0/website/static/description/icon.svg",
    name: "Website",
    cost: "2.00",
  },
  {
    id: 5,
    logoUrl:
      "//download.odoocdn.com/pricing/icons/15.0/website_sale/static/description/icon.svg",
    name: "eCommerce",
    cost: "16.00",
  },
  {
    id: 6,
    logoUrl:
      "//download.odoocdn.com/pricing/icons/15.0/point_of_sale/static/description/icon.svg",
    name: "Point of Sale",
    cost: "8.00",
  },
  {
    id: 7,
    logoUrl:
      "//download.odoocdn.com/pricing/icons/15.0/account_accountant/static/description/icon.svg",
    name: "Acounting",
    cost: "12.00",
  },
  {
    id: 8,
    logoUrl:
      "//download.odoocdn.com/pricing/icons/15.0/project/static/description/icon.svg",
    name: "Project",
    cost: "8.00",
  },
  {
    id: 9,
    logoUrl:
      "//download.odoocdn.com/pricing/icons/15.0/stock/static/description/icon.svg",
    name: "Inventory",
    cost: "7.00",
  },
  {
    id: 10,
    logoUrl:
      "//download.odoocdn.com/pricing/icons/15.0/mrp/static/description/icon.svg",
    name: "Manufacturing",
    cost: "10.00",
  },
  {
    id: 11,
    logoUrl:
      "//download.odoocdn.com/pricing/icons/15.0/purchase/static/description/icon.svg",
    name: "Purchase",
    cost: "8.00",
  },
  {
    id: 12,
    logoUrl:
      "//download.odoocdn.com/pricing/icons/15.0/timesheet_grid/static/description/icon.svg",
    name: "Timesheets",
    cost: "5.00",
  },
  {
    id: 13,
    logoUrl:
      "//download.odoocdn.com/pricing/icons/15.0/mass_mailing/static/description/icon.svg",
    name: "Email Marketing",
    cost: "4.00",
  },
  {
    id: 14,
    logoUrl:
      "//download.odoocdn.com/pricing/icons/15.0/hr_expense/static/description/icon.svg",
    name: "Expenses",
    cost: "10.00",
  },
  {
    id: 15,
    logoUrl:
      "//download.odoocdn.com/pricing/icons/15.0/website_event/static/description/icon.svg",
    name: "Events",
    cost: "8.00",
  },
  {
    id: 16,
    logoUrl:
      "//download.odoocdn.com/pricing/icons/15.0/hr_holidays/static/description/icon.svg",
    name: "Time Off",
    cost: "8.00",
  },
  {
    id: 17,
    logoUrl:
      "//download.odoocdn.com/pricing/icons/15.0/hr_recruitment/static/description/icon.svg",
    name: "Recruitment",
    cost: "14.00",
  },
  {
    id: 18,
    logoUrl:
      "//download.odoocdn.com/pricing/icons/15.0/hr_appraisal/static/description/icon.svg",
    name: "Appraisals",
    cost: "8.00",
  },
];

function Apps(props) {
  return (
    <div className="w-100 app-cards-outer-container">
      <h5 className="align-self-start">Choose your Apps</h5>
      <ul className="row w-100 p-0 apps-container">
        {dataArray.map((each) => (
          <Application key={each.id} appDetails={each} />
        ))}
      </ul>
    </div>
  );
}

export default Apps;
