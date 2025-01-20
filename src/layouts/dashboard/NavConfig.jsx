// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Client Acquisition',
    path: '/client-acquisition',
    icon: getIcon('eva:people-fill'),
    children: [
      { title: 'Prospecting', path: '/client-acquisition/prospecting' },
      { title: 'Proposal', path: '/client-acquisition/proposal' },
      { title: 'Negotiations', path: '/client-acquisition/negotiations' },
      { title: 'Closed (Lost)', path: '/client-acquisition/closed-lost' },
      { title: 'Closed (Won)', path: '/client-acquisition/closed-won' },
    ],
  },
  {
    title: 'Onboarding',
    path: '/onboarding',
    icon: getIcon('eva:file-text-fill'),
    children: [
      { title: 'Signed Contract', path: '/onboarding/signed-contract' },
      { title: 'Directive CEO/CCO', path: '/onboarding/directive-ceo-cco' },
      { title: 'LPO', path: '/onboarding/lpo' },
      { title: 'Payment Terms', path: '/onboarding/payment-terms' },
      { title: 'Payment Status', path: '/onboarding/payment-status' },
      { title: 'Product', path: '/onboarding/product' },
      { title: 'Revenue', path: '/onboarding/revenue' },
    ],
  },
  {
    title: 'Account Management',
    path: '/account-management',
    icon: getIcon('eva:briefcase-fill'),
    children: [
      { title: 'Handover for Implementation', path: '/account-management/handover' },
      { title: 'Managed Services/Network Deployment', path: '/account-management/managed-services' },
      { title: 'Status', path: '/account-management/status' },
      { title: 'Acceptance Documentation', path: '/account-management/acceptance-documentation' },
      { title: 'Project Closure', path: '/account-management/project-closure' },
    ],
  },
  {
    title: 'Revenue Management',
    path: '/revenue-management',
    icon: getIcon('eva:pie-chart-2-fill'),
    children: [
      { title: 'Ageing', path: '/revenue-management/ageing' },
      { title: 'Status', path: '/revenue-management/status' },
    ],
  },
  {
    title: 'Sales',
    path: '/sales',
    icon: getIcon('eva:shopping-bag-fill'),
    children: [
      { title: 'Quotations', path: '/sales/quotations' },
      { title: 'Sales Orders', path: '/sales/sales-orders' },
      { title: 'Products', path: '/sales/products' },
    ],
  },
  {
    title: 'Inventory',
    path: '/inventory',
    icon: getIcon('eva:archive-fill'),
    children: [
      { title: 'Update Quantity', path: '/inventory/update-quantity' },
      { title: 'Manage Stock', path: '/inventory/manage-stock' },
      { title: 'Replenish', path: '/inventory/replenish' },
    ],
  },
  {
    title: 'Purchase',
    path: '/purchase',
    icon: getIcon('eva:file-text-fill'),
    children: [
      { title: 'Purchase Orders', path: '/purchase/purchase-orders' },
      { title: 'Requests for Quotations', path: '/purchase/requests-for-quotations' },
      { title: 'Vendors', path: '/purchase/vendors' },
    ],
  },
  {
    title: 'Repairs',
    path: '/repairs',
    icon: getIcon('eva:settings-2-fill'),
    children: [
      { title: 'Client Machines (Company Products)', path: '/repairs/company-products' },
      { title: 'Client Machines (Other Products)', path: '/repairs/other-products' },
    ],
  },
  {
    title: 'Documents',
    path: '/documents',
    icon: getIcon('eva:file-fill'),
    children: [
      { title: 'Project Contracts', path: '/documents/project-contracts' },
      { title: 'Client Contracts', path: '/documents/client-contracts' },
      { title: 'Tax Documents', path: '/documents/tax-documents' },
      { title: 'Licenses', path: '/documents/licenses' },
    ],
  },
  {
    title: 'Surveys',
    path: '/surveys',
    icon: getIcon('eva:bar-chart-fill'),
    children: [
      { title: 'Customer Satisfaction Survey', path: '/surveys/customer-satisfaction-survey' },
    ],
  },
  {
    title: 'Employees',
    path: '/employees',
    icon: getIcon('eva:people-fill'),
    children: [
      { title: 'Manage Employees', path: '/employees/manage' },
    ],
  },
  {
    title: 'Logout',
    path: '/dashboard/logout',
    icon: getIcon('eva:lock-fill'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill'),
  },
];

export default navConfig;