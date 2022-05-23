import {FaRegHospital} from 'react-icons/fa';
import {HiOutlineAcademicCap} from 'react-icons/hi';
import {RiCustomerService2Line} from 'react-icons/ri';
import {BsCart4} from 'react-icons/bs';
import {MdOutlineAnalytics} from 'react-icons/md';

const routesConfig = [
  {
    id: 'app',
    title: 'Application',
    messageId: 'sidebar.application',
    type: 'group',
    children: [
      {
        id: 'crm',
        title: 'Dashboard',
        messageId: 'sidebar.app.dashboard.crm',
        type: 'item',
        icon: <RiCustomerService2Line />,
        url: '/dashboards/crm',
      },
      {
        id: 'analytics',
        title: 'Companies',
        messageId: 'sidebar.app.dashboard.analytics',
        type: 'item',
        icon: <MdOutlineAnalytics />,
        url: '/dashboards/analytics',
      },
      {
        id: 'healthCare',
        title: 'Add Category',
        messageId: 'sidebar.healthCare',
        type: 'item',
        icon: <FaRegHospital />,
        url: '/dashboards/health-care',
      },
      {
        id: 'e-commerce',
        title: 'Upload Data',
        messageId: 'sidebar.app.dashboard.eCommerce',
        type: 'item',
        icon: <BsCart4 />,
        url: '/dashboards/e-commerce',
      },
      {
        id: 'academy',
        title: 'Subscription',
        messageId: 'sidebar.app.dashboard.academy',
        type: 'collapse',
        icon: <HiOutlineAcademicCap />,
        children: [
          {
            id: 'products',
            title: 'Add Subscription',
            messageId: 'sidebar.ecommerce.products',
            type: 'item',
            url: '/ecommerce/products',
          },
          {
            id: 'product_detail',
            title: 'All Subscriptions',
            messageId: 'sidebar.ecommerce.productDetail',
            type: 'item',
            url: '/ecommerce/product_detail',
          },
        ],
      },
    ],
  },
];
export default routesConfig;
