import Home from "../pages/home/Home";
import LoginSV from "../pages/loginSV/Login";
import Profile from "../pages/profile/Profile";
import Printer from "../pages/printer/Printer";
import History from "../pages/history/History";
import PrinterInfo from "../pages/printerInfo/PrinterInfo";
import Printing from "../pages/printing/Printing";
import MainLayout from "../layouts/MainLayout/MainLayout.jsx";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import LoginAdmin from "../pages/loginAdmin/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import PrintingLogs from "../pages/printingLogs/PrintingLogs";
import ManagePrinter from "../pages/managePrinter/ManagePrinter";
import ManageStudent from "../pages/manageStudent/ManageStudent";
import PrintRequire from "../pages/printRequire/PrintRequire";
import AddPrinter from "../pages/addPrinter/AddPrinter";
import AdminPrinterInfo from "../pages/adminPrinterInfo/AdminPrinterInfo";
import LandingPage from "../pages/landPage/LandingPage"
const routers = [
  {
    path: "/loginSV",
    component: LoginSV,
    layout: null,
  },
  {
    path: "/loginAdmin",
    component: LoginAdmin,
    layout: null,
  },
  {
    path: "/",
    component: LandingPage,
    layout: null,
  },
];
const studentRouters = [
  {
    path: "/home",
    component: Home,
    layout: MainLayout,
  },
  {
    path: "/profile",
    component: Profile,
    layout: MainLayout,
  },
  {
    path: "/printer",
    component: Printer,
    layout: MainLayout,
  },
  {
    path: "/history",
    component: History,
    layout: MainLayout,
  },
  {
    path: "/printerInfo/:id",
    component: PrinterInfo,
    layout: MainLayout,
  },
  {
    path: "/printing/:id",
    component: Printing,
    layout: MainLayout,
  },
];

const adminRouters = [
  {
    path: "/dashboard",
    component: Dashboard,
    layout: AdminLayout,
  },
  {
    path: "/printer-management",
    component: ManagePrinter,
    layout: AdminLayout,
  },
  {
    path: "/configuration",
    component: ManageStudent,
    layout: AdminLayout,
  },
  {
    path: "/print-require",
    component: PrintRequire,
    layout: AdminLayout,
  },
  {
    path: "/printing-logs",
    component: PrintingLogs,
    layout: AdminLayout,
  },
  {
    path: "/addPrinter",
    component: AddPrinter,
    layout: AdminLayout,
  },
  {
    path: "/admin-printerInfo/:id",
    component: AdminPrinterInfo,
    layout: AdminLayout,
  },
];
export { routers, studentRouters, adminRouters };
